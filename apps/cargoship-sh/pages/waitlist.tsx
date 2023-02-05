import IconRadio from "@/components/formbricksEngine/IconRadio";
import Input from "@/components/formbricksEngine/Input";
import { Survey } from "@/components/formbricksEngine/Survey";
import ThankYouHeading from "@/components/formbricksEngine/ThankYouHeading";
import BackgroundGradient from "@/components/home/BackgroundGradient";
import MetaInformation from "@/components/shared/MetaInformation";
import { ComputerDesktopIcon, WrenchScrewdriverIcon, XMarkIcon } from "@heroicons/react/24/outline";

const WaitlistPage = () => (
  <div className="isolate bg-gray-900">
    <MetaInformation
      title={"Join Cargoship beta"}
      description={"Join our beta today and get early access to our easy-to-use AI models."}
    />
    <div className="relative mx-auto w-full max-w-5xl px-6 md:w-3/4">
      <div className="px-4 pt-20 pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-4xl md:text-5xl">
          <span className="xl:inline">Get</span>{" "}
          <span className="from-brand-light to-brand-dark bg-gradient-to-b bg-clip-text text-transparent xl:inline">
            beta
          </span>{" "}
          <span className="inline ">access</span>
        </h1>
        <p className="mt-3 text-sm text-slate-400 dark:text-slate-300 md:text-base">
          We are onboarding users continuously to Cargoship. Tell us more about you!
        </p>
      </div>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <BackgroundGradient rotate={true} />
      </div>

      <div className="mx-auto my-6 w-full max-w-5xl rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur md:my-12 md:px-16 md:py-20">
        <Survey
          formbricksUrl={
            process.env.NODE_ENV === "production" ? "https://app.formbricks.com" : "http://localhost:3000"
          }
          formId={
            process.env.NODE_ENV === "production" ? "cldrtixpk0006mm0gd5xal34g" : "cldrsmxdc0000yzh4gxmk9g58"
          }
          survey={{
            config: {
              progressBar: false,
            },
            pages: [
              {
                id: "rolePage",
                config: {
                  autoSubmit: true,
                },
                elements: [
                  {
                    id: "aiExperience",
                    type: "radio",
                    label: "What is your experience with AI?",
                    name: "aiExperience",
                    options: [
                      { label: "None", value: "none", frontend: { icon: XMarkIcon } },
                      {
                        label: "I used AI before",
                        value: "usedAiBefore",
                        frontend: { icon: ComputerDesktopIcon },
                      },
                      {
                        label: "I know how to train\n& develop models",
                        value: "engineer",
                        frontend: { icon: WrenchScrewdriverIcon },
                      },
                    ],
                    component: IconRadio,
                  },
                ],
              },
              {
                id: "emailPage",
                config: {
                  addFieldsToCustomer: ["email"],
                },
                elements: [
                  {
                    id: "email",
                    type: "text",
                    label: "What's your email?",
                    name: "email",
                    frontend: {
                      required: true,
                      type: "email",
                      placeholder: "email@example.com",
                    },
                    component: Input,
                  },
                ],
              },
              {
                id: "thankYouPageBetaUser",
                endScreen: true,
                elements: [
                  {
                    id: "thankYouBetaUser",
                    type: "html",
                    component: ThankYouHeading,
                  },
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  </div>
);

export default WaitlistPage;
