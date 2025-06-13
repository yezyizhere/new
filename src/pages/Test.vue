<script setup>
import Header from '@/layout/Header.vue'
import { ref } from 'vue'

/********************* 변동사항 ********************/
// 스밍 순서
const TapSets = [
  ['tap1', 'tap2', 'tap3', 'tap4', 'tap5'],
  ['tap1', 'tap5', 'tap4', 'tap3', 'tap2'],
  ['tap1', 'tap4', 'tap5', 'tap2', 'tap3'],
  ['tap1', 'tap3', 'tap2', 'tap5', 'tap4', 'tap6'],
]

// 스밍 순서 긴거
const TapSetting = ['tap1', 'tap2', 'tap3', 'tap4', 'tap5', 'tap1', 'tap5', 'tap4', 'tap3', 'tap2', 'tap1', 'tap4', 'tap5', 'tap2', 'tap3', 'tap1', 'tap3', 'tap2', 'tap5', 'tap4', 'tap6']

// 멜론 링크
const melonMap = {
  tap1: '39120868',
  tap2: '39120869',
  tap3: '39120870',
  tap4: '39120871',
  tap5: '39120872',
  tap6: '38100192',
}

// 지니 링크
const genieMap = {
  tap1: '110421762',
  tap2: '110421763',
  tap3: '110421764',
  tap4: '110421765',
  tap5: '110421766',
  tap6: '108065470',
}

// 벅스 링크
const bugsMap = {
  tap1: '33563976',
  tap2: '33563977',
  tap3: '33563978',
  tap4: '33563979',
  tap5: '33563980',
  tap6: '33324399',
}

// 바이브 링크
const vibeMap = {
  tap1: '94581170',
  tap2: '94581171',
  tap3: '94581172',
  tap4: '94581173',
  tap5: '94581174',
  tap6: '87485726',
}

// 스포티파이
const spotify = 'https://open.spotify.com/playlist/3u1p3qFYWZF9lNrpSXBffW?si=1676186df0f9475d&nd=1&dlsi=0f407d44db5e4266'

/********************* 고정사항 ********************/
// 멜론 PC
function melonPC() {
  const melonpcbase = 'melonapp://play?cType=1&menuId=1000002721&cList='
  const urls = TapSets.map((taps) => melonpcbase + taps.map((tap) => melonMap[tap]).join(','))
  setTimeout(() => {
    window.open(urls[0], '_blank')
    setTimeout(() => {
      window.open(urls[1], '_blank')
      setTimeout(() => {
        window.open(urls[2], '_blank')
        setTimeout(() => {
          window.open(urls[3], '_blank')
        }, 500)
      }, 500)
    }, 500)
  }, 500)
}

// 멜론 안드로이드
const melonAndroidBase = 'melonapp://play?ctype=1&menuid=1000002721&cid='
const melonAndroidUrls = TapSets.map((taps) => melonAndroidBase + taps.map((tap) => melonMap[tap]).join(','))
function melonAndroid(idx) {
  window.open(melonAndroidUrls[idx], '_blank')
}

// 멜론 아이폰
const melonIosBase = 'meloniphone://play/?ctype=1&menuid=0&cid='
const melonIosUrl = melonIosBase + TapSetting.map((tap) => melonMap[tap]).join(';')

// 지니 PC
const geniePCBase = 'https://www.genie.co.kr/player/shareProcessV2?xgnm='
const geniePCUrl = geniePCBase + TapSetting.map((tap) => genieMap[tap]).join(';')

// 지니 안드로이드
const genieAndroidBase = 'cromegenie://scan/?landing_type=31&landing_target='
const genieAndroidUrl = genieAndroidBase + TapSetting.map((tap) => genieMap[tap]).join(';')

// 지니 아이폰
const genieIosBase = 'ktolleh00167://landing/?landing_type=31&landing_target='
const genieIosUrl = genieIosBase + TapSetting.map((tap) => genieMap[tap]).join(';')

// 벅스 핸드폰
const bugsPhoneBase = 'bugs3://app/tracks/lists?title=%EC%A0%84%EC%B2%B4%EB%93%A3%EA%B8%B0&miniplay=Y&track_ids='
const bugsPhoneUrl = bugsPhoneBase + TapSetting.map((tap) => bugsMap[tap]).join('|')

// 벅스 PC
const bugsPCBase = 'https://music.bugs.co.kr/newPlayer?trackId='
const bugsPCUrl = bugsPCBase + TapSetting.map((tap) => bugsMap[tap]).join(',')

// 바이브 폰
const vibeBase = 'vibe://listen?version=3&trackIds='
const vibeAPPUrl = TapSets.map((taps) => vibeBase + taps.map((tap) => vibeMap[tap]).join(','))
function vibeUrl(idx) {
  window.open(vibeAPPUrl[idx], '_blank')
}

// 장난
const showPopup = ref(false)
function openPopup() {
  showPopup.value = true
}
function closePopup() {
  showPopup.value = false
}
</script>

<template>
  <section class="flex flex-col bg-neutral-900 min-h-screen h-full text-zinc-200 pb-2">
    <Header />

    <section class="px-7 p-5 flex-1 h-full flex flex-col gap-3">
      <button @click="melonPC">PC</button>

      <button @click="melonAndroid(0)">멜안1</button>
      <button @click="melonAndroid(1)">멜안2</button>
      <button @click="melonAndroid(2)">멜안3</button>
      <button @click="melonAndroid(3)">멜안4</button>
      <button @click="openPopup" class="text-center">제목: 웅님의 사랑</button>
      <a :href="melonIosUrl" target="_blank" rel="noopener noreferrer">아이폰</a>

      <a :href="geniePCUrl">지니pc</a>
      <a :href="genieAndroidUrl">지니안드</a>
      <a :href="genieIosUrl">지니아이</a>

      <a :href="bugsPhoneUrl">벅스 폰</a>
      <a :href="bugsPCUrl">벅스 컴</a>

      <button @click="vibeUrl(0)">바이브 모바일</button>
      <button @click="vibeUrl(1)">바이브2</button>
      <button @click="vibeUrl(2)">바이브3</button>
      <button @click="vibeUrl(3)">바이브4</button>

      <a :href="spotify">스포티파이</a>
    </section>

    <!-- 팝업 오버레이 -->
    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" @click.self="closePopup">
      <div class="bg-white rounded shadow-lg p-8 min-w-[300px]">
        <h2 class="text-xl font-bold mb-4 text-black">이건 왜 누르는거야</h2>
        <button @click="closePopup" class="mt-6 px-4 py-2 bg-gray-700 text-white rounded">닫기</button>
      </div>
    </div>
  </section>
</template>
