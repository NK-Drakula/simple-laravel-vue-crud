<script setup>
import { reactive } from 'vue';
import useCompanies from '../../composables/companies';

const {storeCompany, errors} = useCompanies();
const form = reactive({
    name: "",
    email: "",
    address: "",
    website: "",
});
</script>
<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" method="POST" @submit.prevent
        ="storeCompany(form)">
            <div class="space-y-6">
                <div class="my-3 text-center">
                    <h2 class="font-extrabold text-lg text-purple-700">
                        New Company
                    </h2>
                </div>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="text" id="name" v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <div v-if="errors.name">
                        <span class="text-sm text-red-500">{{ errors.name[0] }}</span>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="text" id="email" v-model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    
                    <div v-if="errors.email">
                        <span class="text-sm text-red-500">{{ errors.email[0] }}</span>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
                    <input type="text" id="address" v-model="form.address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    
                    <div v-if="errors.address">
                        <span class="text-sm text-red-500">{{ errors.address[0] }}</span>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="website" class="block mb-2 text-sm font-medium text-gray-900">Website</label>
                    <input type="text" id="website" v-model="form.website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <div v-if="errors.website">
                        <span class="text-sm text-red-500">{{ errors.website[0] }}</span>
                    </div>
                </div>
                <div class="mt-4 flex justify-end">
                    <button type="submit" class="px-4 py-2 bg-indigo-700 text-white rounded">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>