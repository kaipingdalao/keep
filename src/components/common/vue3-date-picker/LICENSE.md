# vue3-date-picker

### 使用
```vue
<template>
    <date_picker
        :options="calendarArr"
        :logMarkArr = "logMarkArr"
        @handleClickDay="handleClickDay"
        @handlePrevMonth="handlePrevMonth"
        @handleNextMonth="handleNextMonth"
        @handleBackDay="handleBackDay"
    ></date_picker>
</template>
<script>
import date_picker from '../vue3-date-picker/date-picker.vue'
export default {
    components: {
        date_picker
    },
    setup() {
        const state = reactive({
            // 日历选项
            calendarArr: {
                type: 'combination',
                headStyle: {
                    todayBtn: 'right',
                    combination: 'center',
                    checkBtn: 'right',
                },
                viewStyle: {
                    day: 'right'
                },
                calendarData: []
            }
            })
            const {calendarArr} = toRefs(state)
            const handleClickDay = () => {}
            const handlePrevMonth = () => {}
            const handleNextMonth = () => {}
            const handleBackDay = () => {}
            const logMarkArr = () => {}
        return {
            calendarArr,
            logMarkArr,
            handleClickDay,
            handlePrevMonth,
            handleNextMonth,
            handleBackDay
        }
    }
}
</script>
```
##### 触发事件
* handleClickDay：点击某一日期
* handlePrevMonth：点击上月
* handleNextMonth：点击下月
* handleBackDay：点击回到今天

##### logMarkArr 日期标记数据格式
```json
{
    "code": 200,
    "data": [
        {
            "id": 1,
            "date_time": 1593598360,
            "y": "2020",
            "m": "7",
            "d": "1"
        },
        {
            "id": 2,
            "date_time": 1593601960,
            "y": "2020",
            "m": "7",
            "d": "1"
        }
    ]
}
```
