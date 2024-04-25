---
"@utima/ui-informed": minor
---

Added `readOnly` mode to Select, this is unfortunately not entirely automatic, as you need to provide `renderValue` function, which is used to render current value in readOnly mode. Since we don't have access to the actual value representation, we can't render it automatically.
```
