### ตัวอย่างการใช้งาน filter ใน rxjs [Learn RxJS](https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter)
 
 #### กรองค่าที่มีเงื่อนไขเป็นจริง

```
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

// พ่นค่า 1, 2, 3, 4, 5 ตามลำดับ
const source = of(1, 2, 3, 4, 5);

// กรองค่าที่มีเงื่อนไขเป็นจริง
const example = source.pipe(filter(item => item === 3));

// ผลลัพธ์
// 3
example.subscribe(console.log);
```
