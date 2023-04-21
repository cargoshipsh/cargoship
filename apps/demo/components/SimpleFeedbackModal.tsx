import { detectLanguage } from "@/lib/detectLanguage";
import { getSentiment } from "@/lib/sentiment";
import { addFeedbackToLocalStorage } from "@/lib/storage";
import { Transition } from "@headlessui/react";
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface SimpleFeedbackModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  setShowConfetti: (show: boolean) => void;
}

export default function SimpleFeedbackModal({ show, setShow, setShowConfetti }: SimpleFeedbackModalProps) {
  const [showLanguageError, setShowLanguageError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // fetch detected language backend
    const language = await detectLanguage(data.feedback);
    if (language === "en") {
      setShowConfetti(true);
      toast.success("Thank you for your feedback! 🎉");
      setShow(false);
      // detect sentiment
      const sentiment = await getSentiment(data.feedback);
      const feedback = {
        feedback: data.feedback,
        sentiment,
        createdAt: new Date().toISOString(),
      };
      addFeedbackToLocalStorage(feedback);
    } else {
      setShowLanguageError(true);
    }
  };

  useEffect(() => {
    if (!show) {
      reset();
    }
  }, [show, reset]);

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6">
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-slate-900">We would like to hear your feedback</p>
                    <form className="mt-3 w-full" onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <div className="mt-2">
                          <textarea
                            rows={4}
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:py-1.5 sm:text-sm sm:leading-6"
                            {...register("feedback", { required: true })}
                          />
                        </div>
                        <div className="mt-4 flex justify-end">
                          <button
                            type="submit"
                            className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                            Create
                          </button>
                        </div>
                      </div>
                    </form>
                    {showLanguageError && (
                      <div className="mt-4 border-l-4 border-yellow-400 bg-yellow-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                              So happy you want to provide feeedback, but unfortunately we only understand
                              English 🥺
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <hr className="my-2" />
                    <p className="mt-1 text-sm text-slate-500">
                      If you have a specific issue, please contact support directly at email us or visit our
                      docs
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}>
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
