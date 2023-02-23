import FeatureSelection from "@/components/formbricksEngine/FeatureSelection";
import IconRadio from "@/components/formbricksEngine/IconRadio";
import Input from "@/components/formbricksEngine/Input";
import Scale from "@/components/formbricksEngine/Scale";
import ThankYouHeading from "@/components/formbricksEngine/ThankYouHeading";
import BackgroundGradient from "@/components/home/BackgroundGradient";
import MetaInformation from "@/components/shared/MetaInformation";
import { Logo } from "@cargoship/ui";
import { FormbricksEngine } from "@formbricks/engine-react";
import { PhotoIcon } from "@heroicons/react/20/solid";
import {
  BoltIcon,
  Cog8ToothIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  FlagIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  WindowIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePlausible } from "next-plausible";
import Link from "next/link";

const WaitlistPage = () => {
  const plausible = usePlausible();
  return (
    <div className="relative isolate flex min-h-screen flex-col justify-between bg-gray-900">
      <BackgroundGradient rotate={true} />

      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cargoship</span>
              <Logo className="h-8 fill-white" />
            </Link>
          </div>
        </nav>
      </div>
      <MetaInformation
        title={"Join Cargoship beta"}
        description={"Join our beta today and get early access to our easy-to-use AI models."}
      />
      <main className="max-w-8xl mx-auto mb-auto flex w-full flex-col justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="mx-auto w-full max-w-5xl px-6 md:w-3/4">
          <div className="px-4 pt-20 pb-4">
            <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl md:text-5xl">
              <span className="xl:inline">Get</span>{" "}
              <span className="from-brand-light to-brand-dark bg-gradient-to-b bg-clip-text text-transparent xl:inline">
                early
              </span>{" "}
              <span className="inline ">access</span>
            </h1>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              We are onboarding users continuously. Tell us more about you!
            </p>
          </div>

          <div className="mx-auto my-6 w-full max-w-5xl rounded-xl border-white/10 bg-white/5 px-8 py-10 md:my-12 md:px-16 md:py-20">
            <FormbricksEngine
              formbricksUrl={
                process.env.NODE_ENV === "production" ? "https://app.formbricks.com" : "http://localhost:3000"
              }
              formId={
                process.env.NODE_ENV === "production"
                  ? "cldrtixpk0006mm0gd5xal34g"
                  : "cldrsmxdc0000yzh4gxmk9g58"
              }
              onPageSubmit={({ page }) => plausible(`waitlistSubmitPage-${page.id}`)}
              onFinished={() => plausible("waitlistFinished")}
              schema={{
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
                        id: "role",
                        type: "radio",
                        label: "What industry or field do you mainly work in? ",
                        name: "role",
                        options: [
                          {
                            label: "Software Development",
                            value: "softwareDevelopment",
                            frontend: { icon: ComputerDesktopIcon },
                          },
                          {
                            label: "Web Development",
                            value: "webdevelopment",
                            frontend: { icon: WindowIcon },
                          },
                          {
                            label: "MobileDevelopment",
                            value: "mobileDevelopment",
                            frontend: { icon: DevicePhoneMobileIcon },
                          },
                          {
                            label: "I'm not a developer",
                            value: "notDeveloper",
                            frontend: { icon: XMarkIcon },
                          },
                        ],
                        component: IconRadio,
                      },
                    ],
                  },
                  {
                    id: "aiExperiencePage",
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
                    id: "modelSelectionPage",
                    elements: [
                      {
                        id: "modelSelection",
                        type: "checkbox",
                        label: "What models from our collection do you need?",
                        name: "modelSelection",
                        options: [
                          {
                            label: "Text Summarization",
                            value: "textSummarization",
                            frontend: {
                              icon: DocumentTextIcon,
                              description:
                                "Automatically reduce a text document to its most important points while preserving its overall meaning.",
                            },
                          },
                          {
                            label: "Language Detection",
                            value: "languageDetection",
                            frontend: {
                              icon: FlagIcon,
                              description: "Automatically determine the language of a given text.\n",
                            },
                          },
                          {
                            label: "Text Generation",
                            value: "textGeneration",
                            frontend: {
                              icon: DocumentTextIcon,
                              description:
                                "Automatically generate coherent and meaningful text in response to a prompt, using statistical and machine learning techniques.",
                            },
                          },
                          {
                            label: "Image Recognition",
                            value: "imageRecognition",
                            frontend: {
                              icon: PhotoIcon,
                              description:
                                "Identiy objects, people, scenes, and actions within an image using machine learning algorithms.",
                            },
                          },
                          {
                            label: "Audio Transcription",
                            value: "audioTranscription",
                            frontend: {
                              icon: MicrophoneIcon,
                              description:
                                "Convert spoken words within an audio recording into written text.",
                            },
                          },
                          {
                            label: "General Classification",
                            value: "generalClassification",
                            frontend: {
                              icon: Cog8ToothIcon,
                              description:
                                "Use the relationship of a given dataset to assign new input data to one of a predefined set of classes or categories.",
                            },
                          },
                        ],
                        component: FeatureSelection,
                      },
                    ],
                  },
                  {
                    id: "urgencyPage",
                    config: {
                      autoSubmit: true,
                    },
                    elements: [
                      {
                        id: "urgency",
                        type: "radio",
                        label: "How urgently do you need this?",
                        name: "urgency",
                        options: [
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                          { label: "3", value: "3" },
                          { label: "4", value: "4" },
                          { label: "5", value: "5" },
                          { label: "6", value: "6" },
                          { label: "7", value: "7" },
                          { label: "8", value: "8" },
                          { label: "9", value: "9" },
                          { label: "10", value: "10" },
                        ],
                        frontend: {
                          min: 1,
                          max: 10,
                          minLabel: "I’m just curious",
                          maxLabel: "As soon as possible",
                        },
                        component: Scale,
                      },
                    ],
                  },
                  {
                    id: "mostImportantFeaturePage",
                    config: {
                      autoSubmit: true,
                    },
                    elements: [
                      {
                        id: "mostImportantFeature",
                        type: "radio",
                        label: "What is the most important feature you would like in an AI product?",
                        name: "mostImportantFeature",
                        options: [
                          { label: "Ease of use", value: "easeOfUse", frontend: { icon: BoltIcon } },
                          {
                            label: "Scalability",
                            value: "scalability",
                            frontend: { icon: RocketLaunchIcon },
                          },
                          {
                            label: "Accuracy of results",
                            value: "accuracy",
                            frontend: { icon: MagnifyingGlassIcon },
                          },
                        ],
                        component: IconRadio,
                      },
                    ],
                  },
                  {
                    id: "productTypePage",
                    config: {
                      autoSubmit: true,
                    },
                    elements: [
                      {
                        id: "productType",
                        type: "radio",
                        label: "Which type of AI product would you prefer for your first AI project?",
                        name: "productType",
                        options: [
                          {
                            label: "External API for easy integration",
                            value: "externalApi",
                            frontend: { icon: BoltIcon },
                          },
                          {
                            label: "Open source, ready-to-use\nAI models in docker containers",
                            value: "openSource",
                            frontend: { icon: CommandLineIcon },
                          },
                          {
                            label: "I am not sure yet",
                            value: "notSure",
                            frontend: { icon: QuestionMarkCircleIcon },
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
      </main>
    </div>
  );
};

export default WaitlistPage;
