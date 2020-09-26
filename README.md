### ตัวอย่างการใช้งาน from ใน rxjs [Learn RxJS](https://www.learnrxjs.io/learn-rxjs/operators/creation/from)
 
 #### เปลี่ยนค่าที่เป็น array ให้เป็น observable

```
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
```
