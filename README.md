pic-on-pic
==========

Предположим, у вас есть галерея и вам надо сделать, чтобы при наведении на блоки менялась картинка. В моем случае, на картинку накладывается другая картинка, немного видоизменяя первую по форме.  В css у нужного селектора создаем background-image (BI) - это именно та картинка, которая будет накладываться на картинку из html (IMG) при наведении. Алгоритм очень прост - при наведении BI становится IMG, а IMG становится BI. При mouseleave функция повторяется.  Желательно, чтобы основной цвет over.png соответствовал body background-color. 