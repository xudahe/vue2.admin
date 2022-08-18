<template>
  <div class="duty_calendar">
    <dutyCalendar></dutyCalendar>
  </div>
</template>

<script>
import dutyCalendar from "../../components/duty_calendar/index1.vue";

export default {
  name: "t-dutyCalendar", // 注意：”t-dutyCalendar“该名称不能与“dutyCalendar”的名称一致
  components: { dutyCalendar },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.duty_calendar {
  height: 100%;
  width: 100%;
}
</style>
