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

// 멜론 링크
const melonMap = {
  tap1: '39120868',
  tap2: '39120869',
  tap3: '39120870',
  tap4: '39120871',
  tap5: '39120872',
  tap6: '38100192',
}

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
        })
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
const melonIosBase = 'melonapp://play?ctype=1&menuid=1000002721&cid='
const melonIosUrls = TapSets.map((taps) => melonIosBase + taps.map((tap) => melonMap[tap]).join(','))
function melonIos(idx) {
  const a = document.createElement('a')
  a.href = melonIosUrls[idx]
  a.target = '_blank'
  a.rel = 'noopener noreferrer'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
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
      <div class="grid grid-cols-2 gap-5">
        <button @click="melonIos(0)">멜아1</button>
        <button @click="melonIos(1)">멜아2</button>
        <button @click="melonIos(2)">멜아3</button>
        <button @click="melonIos(2)">멜아4</button>
      </div>
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
