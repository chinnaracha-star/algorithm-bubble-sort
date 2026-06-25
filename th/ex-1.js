/* 
ให้เขียน Function ที่ชื่อว่า sortedFromMinToMax ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers
        1. numbers เป็น Array ที่บรรจุตัวเลขที่ยังไม่เรียงลำดับ
    - Function นี้จะเรียงข้อมูลใน numbers จากน้อยไปมาก โดยใช้ Bubble Sort Algorithm และ Return numbers ออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function sortedFromMinToMax(numbers) {
  for (let x = 0; x < numbers.length - 1; x += 1) {
    for (let y = 0; y < numbers.length - 1 - x; y += 1) {
      if (numbers[y] > numbers[y + 1]) {
        let temp = numbers[y];
        numbers[y] = numbers[y + 1];
        numbers[y + 1] = temp;
      }
    }
  }
  return numbers;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(sortedFromMinToMax(numbers)); // [11, 12, 22, 25, 34, 64, 90]
