<template>

<h1>{{ emails.value }}</h1>
    
    <Swiper 
        :modules="modules" 
        :spaceBetween="20"
        :breakpoints="{
           768: { slidesPerView: 1 }, 
           769: { slidesPerView: 2 }
         }"
         :navigation="true" 
         :class="'email-section mt-[50px]'">
        <SwiperSlide class="custom-card relative" v-for="email in emails" :key="email.id">
            <div @click="changeFrameURL(email.etLink)">
                <h1>{{ email.etName }}</h1>
            </div>
        </SwiperSlide>
    </Swiper>

    <iframe :src="emailLink" class="email-frame"></iframe>
</template>
    
    
<script setup>
import { onMounted, ref, watch } from 'vue';
import getEmailTemplates from '@/composables/getEmailTemplates';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation];

let emailLink = ref("");
const { emails, error, loadEmailTemplates } = getEmailTemplates();

const changeFrameURL = (data) => {
    emailLink.value = `/projects/email-templates/${data}/index.html`;
};

onMounted(async () => {
    await loadEmailTemplates();

    if (emails.value.length > 0) {
        changeFrameURL(emails.value[0].etLink);
    }
});

</script>

<style scope>
.email-frame {
    width: 100%;
    min-width: 600px;
    height: 600px;
    border: 1px solid #ddd;
    margin-top: 10px;
}
</style>