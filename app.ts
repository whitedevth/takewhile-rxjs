import { from } from 'rxjs';

// พ่นค่า 1, 2, 3, 4, 5 ที่เป็น array ตามลำดับ
const source = from([1, 2, 3, 4, 5]);

// ผลลัพธ์
// 1
// 2
// 3
// 4
// 5
source.subscribe(console.log);