# ตัวอย่างการใช้งาน of ใน rxjs

```
import { of } from 'rxjs';

// พ่นค่า 1, 2, 3, 4, 5 ตามลำดับ
const source = of(1, 2, 3, 4, 5);

// ผลลัพธ์
// 1
// 2
// 3
// 4
// 5
source.subscribe(console.log);
```
