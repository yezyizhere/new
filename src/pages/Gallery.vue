<script setup>
import Header from '@/layout/Header.vue'

const selectSeason = [
  { name: '배경화면', url: 'https://drive.google.com/drive/u/0/folders/1SDZYsASrvhAc0R3ZjpyEgPjP-E13OVYr' },
  { name: '13. GWBG', url: 'https://drive.google.com/drive/u/0/folders/1C7B4tnEQgj4wsFNsPmuRhrukNlB__FHI' },
  { name: '12. 에어', url: 'https://drive.google.com/drive/u/0/folders/1-Cd-flVJyJf2UdEiz6oxbGw1b2oyRK05' },
  { name: '11. 골드', url: 'https://drive.google.com/drive/folders/199s3mh61uXKhc9hBLDmBA1VStMQRsMOr?usp=drive_link' },
  { name: '10. 언터쳐블', url: 'https://drive.google.com/drive/folders/1QSWTVdM5eF6VuIoXfDO4yYz0VgLJXpK8?usp=drive_link' },
  { name: '09. 케이크', url: 'https://drive.google.com/drive/folders/1LHaJkhbXdjJH4T4qn1BuxsacEWe2WcCn?usp=drive_link' },
  { name: '08. 체셔', url: 'https://drive.google.com/drive/folders/1fOlF9pIVsOQ5DmwJKwlFzbrAtbig8Ry9?usp=drive_link' },
  { name: '07. 스니커즈', url: 'https://drive.google.com/drive/folders/1HIe8ZVIBnrdo6di_24uGB6ejtt_9vpPJ?usp=drive_link' },
  { name: '06. 로꼬', url: 'https://drive.google.com/drive/folders/1TWoUVdFQtI2CN0QVzRNbVO_yAed3LK8N?usp=drive_link' },
  { name: '05. 마피아', url: 'https://drive.google.com/drive/folders/1f8qkFA11P76ur1DgCPUSoeUjl4MrZ7FK?usp=drive_link' },
  { name: '04. 낫샤이', url: 'https://drive.google.com/drive/folders/1eA9H-UuEmIqrolCQqHhTdzVRDjyHd65f?usp=drive_link' },
  { name: '03. 워너비', url: 'https://drive.google.com/drive/folders/1IJb25foPVYJUHOAiiogQqOVD6eds-yVA?usp=drive_link' },
  { name: '02. ICY', url: 'https://drive.google.com/drive/folders/1J1KPl4hj0SJST3bNF0OVsU88ipUXCzFR?usp=drive_link' },
  { name: '01. 달라달라', url: 'https://drive.google.com/drive/folders/1vkPvqBGDp--aSVjmCJlU0b8GJs05C23R?usp=drive_link' },
]
</script>

<template>
  <section class="flex flex-col bg-neutral-900 min-h-screen h-full text-zinc-200 pb-2">
    <Header />

    <section class="px-7 p-5 flex-1 h-full flex flex-col">
      <h1 class="text-center text-2xl mb-3">검하 비밀 기지</h1>
      <!-- 사진 버튼 -->
      <nav class="rounded-lg border-2 p-3">
        <nav class="grid grid-cols-2 gap-5">
          <div v-for="select in selectSeason" :key="select.name">
            <a :href="select.url" class="block w-full text-center py-3 rounded bg-zinc-800 hover:bg-pink-500 transition-colors ring ring-zinc-400">
              {{ select.name }}
            </a>
          </div>
        </nav>
      </nav>
    </section>
  </section>
</template>
