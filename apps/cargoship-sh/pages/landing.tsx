import { Logo } from "@cargoship/ui";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineApi } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Cargoship - The Ultimate AI Model Store</title>
        <meta
          name="description"
          content="Take your AI development to the next level with Cargoship - the ultimate AI model store. Get pre-selected, high-quality models with detailed information, easy integration, and data protection."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-6xl pt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Cargoship - The Ultimate AI Model Store</h1>
            <p className="mt-4 text-gray-600">
              Take your AI development to the next level with Cargoship. Get pre-selected, high-quality models
              with detailed information, easy integration, and data protection.
            </p>

            <div className="mt-10">
              <Link
                href="#"
                className="rounded-md bg-indigo-600 py-3 px-5 text-white transition-colors duration-300 hover:bg-indigo-700">
                Sign Up Now and Get 500 Free Credits
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <Logo className="h-16 fill-gray-800" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-md bg-white p-8 shadow-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-white">
              <FaCheckCircle className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-xl font-bold text-gray-900">Pre-selected Models</h2>
            <p className="mt-4 text-gray-600">
              All models have been tested and categorized by us beforehand. This allows us to guarantee the
              highest quality of the models.
            </p>
          </div>

          <div className="rounded-md bg-white p-8 shadow-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-white">
              <AiOutlineApi className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-xl font-bold text-gray-900">Easy Integration</h2>
            <p className="mt-4 text-gray-600">
              All models are offered both as Docker containers to easily integrate the models into your
              development environment, and as API endpoints to easily leverage AI with minimal effort. Our
              step-by-step instructions make it easy for developers of all skill levels to use our models,
              even if they have no AI experience!
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-md bg-white p-8 shadow-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-white">
              <IoOpenOutline className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-xl font-bold text-gray-900">Additional Information</h2>
            <p className="mt-4 text-gray-600">
              You will receive detailed information on quality, license, system requirements, and much more.
            </p>
          </div>

          <div className="rounded-md bg-white p-8 shadow-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-white">
              <FiSettings className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-xl font-bold text-gray-900">Custom Development</h2>
            <p className="mt-4 text-gray-600">
              The right model for your application is not available, or the accuracy of the selected model is
              not high enough? Our team of AI experts will search for, develop, or adapt models for your use
              case in an individual project with you.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
          <p className="mt-4 text-gray-600">
            With Cargoship, you have the flexibility to choose between processing on CPU or GPU. Here are the
            pricing details:
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="max-w-sm rounded-md bg-white p-8 shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-white">
                <BiDollar className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">Cost per 1000 Credits: 2,- EUR</h3>
              <p className="mt-4 text-gray-600">Processing on CPU: 1 Credits / Call</p>
              <p className="mt-2 text-gray-600">Processing on GPU: 10 Credits / Call</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Examples</h2>
          <p className="mt-4 text-gray-600">
            Here are some examples of models that you can find on Cargoship:
          </p>

          <ul className="mt-4 list-inside list-disc">
            <li className="text-gray-600">
              Text based models (Language Detection, Text Classification, Text generation)
            </li>
            <li className="text-gray-600">Image models (i.e. Image classification)</li>
            <li className="text-gray-600">Model for automated Data Cleaning</li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Open Source</h2>
          <p className="mt-4 text-gray-600">
            Alternatively, if you don&apos;t want to use the API, our models are conveniently packaged in
            Docker containers so they can be easily downloaded and integrated into your development process -
            for free.
          </p>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl py-4 px-4 sm:px-6 lg:py-8 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
            
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-gray-500">&copy; 2023 Cargoship. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
