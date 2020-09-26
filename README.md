### ตัวอย่างการใช้งาน takeWhile ใน rxjs [Learn RxJS](https://www.learnrxjs.io/learn-rxjs/operators/filtering/takewhile)
 
 #### ปล่อยค่าจนกว่าเงื่อนไขจะเป็น false

```
import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
const example = source.pipe(takeWhile(item => item <= 3));

// ผลลัพธ์
// 1
// 2
// 3
example.subscribe(console.log);
```
