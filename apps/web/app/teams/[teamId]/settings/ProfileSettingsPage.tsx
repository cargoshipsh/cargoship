"use client";

import { Button } from "@/components/ui/Button";
import { createApiKey, deleteApiKey } from "@/lib/apiKeysClient";
import { convertDateTimeString } from "@/lib/utils";
import type { ApiKey } from "@prisma/client";
import Modal from "components/Modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ApiKeyReturn = ApiKey & {
  apiKey: string;
};

interface ProfileSettingsPageProps {
  apiKeys: ApiKeyReturn[];
}

export default function ProfileSettingsPage({ apiKeys }: ProfileSettingsPageProps) {
  const router = useRouter();
  const [apiKeysLocal, setApiKeysLocal] = useState(apiKeys);
  const [openNewApiKeyModal, setOpenNewApiKeyModal] = useState(false);

  useEffect(() => {
    setApiKeysLocal(apiKeys);
  }, [apiKeys]);

  return (
    <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Account Settings</h1>
      </header>
      {/* Payment details */}
      <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <section aria-labelledby="payment-details-heading">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="mt-6 sm:flex-auto">
                  <h1 className="text-xl font-semibold text-gray-900">Personal API Keys</h1>
                  <p className="mt-2 text-sm text-gray-700">
                    These keys allow full access to your personal account through the API, as if you were
                    logged in. Try not to keep disused keys around. If you have any suspicion that one of
                    these may be compromised, delete it and use a new one.
                  </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <Button onClick={() => setOpenNewApiKeyModal(true)}>Add API Key</Button>
                </div>
              </div>

              <div className="mt-8 flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">
                              Label
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Value
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Last Used
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Created
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {apiKeysLocal.length === 0 ? (
                            <tr>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                You don&apos;t have any API Keys yet
                              </td>
                            </tr>
                          ) : (
                            apiKeysLocal.map((apiKey) => (
                              <tr key={apiKey.hashedKey}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                  {apiKey.label}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {apiKey.apiKey || <span className="italic">secret</span>}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {convertDateTimeString(apiKey.lastUsedAt?.toString())}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {convertDateTimeString(apiKey.createdAt.toString())}
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                                  <button
                                    onClick={async () => {
                                      if (
                                        confirm(
                                          "Do you really want to delete this API Key? It can no longer be used to access the API and cannot be restored."
                                        )
                                      ) {
                                        await deleteApiKey(apiKey);
                                        router.refresh();
                                      }
                                    }}
                                    className="hover:text-brand text-slate-800">
                                    Delete<span className="sr-only">, {apiKey.label}</span>
                                  </button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {openNewApiKeyModal && (
        <Modal open={openNewApiKeyModal} setOpen={setOpenNewApiKeyModal}>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
            Create a Personal API Key
          </h2>
          <hr className="my-4 w-full text-gray-400" />
          <form
            onSubmit={async (e: any) => {
              e.preventDefault();
              const apiKey = await createApiKey({ label: e.target.label.value });
              setApiKeysLocal([...apiKeys, apiKey]);
              setOpenNewApiKeyModal(false);
            }}>
            <div>
              <label htmlFor="label" className="block text-sm font-medium text-gray-700">
                Label
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="label"
                  id="label"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Label, e.g. Github"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-800">
              Key value will only ever be shown once, immediately after creation. Copy it to your destination
              right away.
            </p>
            <div className="mt-4 flex w-full justify-end">
              <Button className="mr-2">Cancel</Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
