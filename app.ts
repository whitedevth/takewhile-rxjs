import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

// พ่นค่า 1, 2, 3, 4, 5 ตามลำดับ
const source = of(1, 2, 3, 4, 5);

// ผลลัพธ์
// 1
// 2
// 3
// 4
// 5
source.subscribe(console.log);