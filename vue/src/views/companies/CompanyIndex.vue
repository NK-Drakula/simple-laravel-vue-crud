<script setup>
    import useCompanies from '../../composables/companies';
    import { onMounted } from 'vue';

    const { companies, getCompanies, destroyCompany } = useCompanies();

    onMounted(() => getCompanies());
</script>
<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name: 'CompanyCreate'}" class="px-4 py-2 bg-indigo-700 text-white rounded">Create Company</RouterLink>
        </div>
        <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Company name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Company Email
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Address
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Website
                        </th>
                        <th scope="col" class="py-3 px-6">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="Item in companies" :key="Item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ Item.name }}
                        </th>
                        <td class="py-4 px-6">
                            {{ Item.email }}
                        </td>
                        <td class="py-4 px-6">
                            {{ Item.address }}
                        </td>
                        <td class="py-4 px-6">
                            {{ Item.website }}
                        </td>
                        <td>
                            <div class="flex">
                                <RouterLink class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2" :to="{name: 'CompanyEdit', params: {id: Item.id}}">Edit</RouterLink>
                                <button class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded mx-2" @click="destroyCompany(Item.id)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
                
    </div>
</template>