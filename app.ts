import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
const example = source.pipe(takeWhile(item => item <= 3));

// ผลลัพธ์
// 1
// 2
// 3
example.subscribe(console.log);