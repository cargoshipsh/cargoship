export default function Example() {
  return (
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Future-Proof Your Software.
            <br />
            Trust in Quality.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Embrace the power of cloud computing and seamlessly integrate AI into your software with our cloud-powered model hosting. Experience the convenience, scalability, and reliability that our platform offers. Join us on this exciting journey and unlock the endless possibilities of machine learning for your business or development projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href = "https://app.cargoship.sh/auth/signup"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="/blog/why-we-developed-cargoship" className="text-sm font-semibold leading-6 text-white">
              About us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
  )
}
