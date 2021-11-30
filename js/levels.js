var levels = [
  {
    name: 'justify-content 1',
    instructions: {
      en:
        '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      ro:
        '<p>Bine ai venit la Flexbox Froggy, un joc unde îl ajuți pe Froggy și prietenii lui scriind cod CSS! Ghidează această broască pe nufărul din partea dreapta utilizând proprietatea <code>justify-content</code>, care aliniază elementele orizontal și acceptă următoarele valori:</p><ul><li><code>flex-start</code>: Elementele se aliniază pe partea stangă a containerului.</li><li><code>flex-end</code>: Elementele se aliniază pe partea dreaptă a containerului.</li><li><code>center</code>: Elementele se aliniază pe centrul containerului.</li><li><code>space-between</code>: Elementele se afișează cu spațiu egal între ele.</li><li><code>space-around</code>: Elementele se afișează cu spațiu egal în jurul lor.</li></ul><p>De exemplu, <code>justify-content: flex-end;</code> va muta broasca la dreapta. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      bg:
        '<p>Добре дошли във Flexbox Froggy, игра, в която вие помагате на жабета и приятели, пишейки CSS код! Насочете това жабче към листото в дясно използвайки свойството <code>justify-content</code>, което подрежда елементи по хоризонталата и приема следните стойности:</p><ul><li><code>flex-start</code>: Елементите се подреждат в лявата страна на контейнера.</li><li><code>flex-end</code>: Елементите се подреждат в дясната страна на контрейнера.</li><li><code>center</code>: Елементите се подреждат в средата на контейнера.</li><li><code>space-between</code>: Елементите се подреждат с равно разстояние помежду им.</li><li><code>space-around</code>: Елементите се подреждат с равно разстояние около тях.</li></ul><p>Например, <code>justify-content: flex-end;</code> ще премести жабчето в дясно. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      de:
        '<p>Willkommen bei Flexbox Froggy, einem Spiel, in dem du Froggy und seinen Freunden hilfst, indem du CSS-Code schreibst! F&uuml;hre diesen Frosch zum Seerosenblatt auf der rechten Seite, indem du die <code>justify-content</code>-Eigenschaft verwendest, die Elemente horizontal ausrichtet, und die folgenden Werte akzeptiert:</p><ul><li><code>flex-start</code>: Elemente an der linken Seite des Containers ausrichten.</li><li><code>flex-end</code>: Elemente an der rechten Seite des Containers ausrichten.</li><li><code>center</code>: Elemente an der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Elemente mit gleichem Innenabstand ausrichten.</li><li><code>space-around</code>: Elemente mit gleichem Au&szlig;enabstand ausrichten.</li></ul><p>Mit <code>justify-content: flex-end;</code> bewegst du den Frosch beispielsweise nach rechts.</p>',
      es:
        '<p>Bienvenido a Flexbox Froggy, un juego donde ayudarás a Froggy y a sus amigos escribiendo código CSS. Guía a esta rana hacia la hoja de lirio en la derecha, usando la propiedad <code>justify-content</code>, la cual alinea elementos horizontalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contenedor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul><p>Por ejemplo, <code>justify-content: flex-end;</code> moverá la rana a la derecha.</p>',
      'pt-br':
        '<p>Bem-vindo ao Flexbox Froggy, um jogo onde você pode ajudar Froggy e seus amigos ao escrever código CSS! Guie o sapo à vitória-régia na direita usando a propriedade <code>justify-content</code>, que alinha itens horizontalmente e aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham à esquerda do container.</li><li><code>flex-end</code>: Itens se alinham à direita do container.</li><li><code>center</code>: Itens se alinham no centro do container.</li><li><code>space-between</code>: Itens se alinham com distância igual entre eles.</li><li><code>space-around</code>: Itens se alinham com distância igual em torno deles.</li></ul><p>Por exemplo, <code>justify-content: flex-end;</code> moverá o sapo para a direita.</p>',
      fr:
        "<p>Bienvenue à Flexbox Froggy, un jeu où vous aidez Froggy la grenouille et ses amis en écrivant du code CSS! Guidez cette grenouille au nénuphar à la droite de l'étang en utilisant la propriété <code>justify-content</code>, qui aligne les éléments horizontalement et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les éléments s'alignent au côté gauche du conteneur.</li><li><code>flex-end</code> : Les éléments s'alignent au côté droit du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s'alignent au centre du conteneur.</li><li><code>space-between</code>&nbsp;: Les éléments s'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les éléments s'affichent avec un espacement égal à l'entour d'eux.</li></ul><p>Par exemple,  <code>justify-content: flex-end;</code> bougera la grenouille vers la droite.</p>",
      ru:
        '<p>Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям написанием CSS кода! Направь этого лягушонка на лилию справа используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul><p>Например, <code>justify-content: flex-end;</code> сдвинет лягушонка вправо.</p>',
      fa:
        '<p>به آموزش فلکس باکس  خوش آمدید, این قورباغه به شما کمک میکنه که بهتر فلکس باکس رو درک کنید! با استفاده از خصوصیت <code>justify-content</code> می‌تونید نحوه چیدمان آیتم‌ها بر روی محور اصلی را تعیین کنید, این خصوصیت مقادیر زیر را می پذیرد:</p><ul><li><code>flex-start</code>: آیتم‌ها از ابتدای <span class="en-font"><span class="en-font">flex-line</span></span> ها چیده می‌شوند.</li><li><code>flex-end</code>:  آیتم‌ها از انتهای <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>center</code>: آیتم‌ها از وسط <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>space-between</code>: آیتم اول در ابتدا و آیتم آخر در انتهای <span class="en-font">flex-line</span> قرار می گیرند و بقیه آیتم ها در بین آنها با یک فاصله ی برابر قرار می‌گیرند.</li><li><code>space-around</code>: آیتم ها با فضای برابر در کنار یکدیگر قرار می‌گیرند.</li></ul><p> برای مثال , <bdi><code style="direction:ltr;">justify-content: flex-end;</code></bdi> قورباغه رو به سمت راست جا به جا میکنه',
      'zh-cn':
        '<p>欢迎来到Flexbox Froggy。在游戏中你会靠写CSS代码来帮助青蛙和他的朋友们！请用<code>justify-content</code>属性指引青蛙到右边的荷叶上。这个属性可以水平对齐元素，并且接受以下几个参数：</p><ul><li><code>flex-start</code>: 元素和容器的左端对齐。</li><li><code>flex-end</code>: 元素和容器的右端对齐。</li><li><code>center</code>: 元素在容器里居中。</li><li><code>space-between</code>:元素之间保持相等的距离。</li><li><code>space-around</code>:元素周围保持相等的距离。</li></ul><p>举个例子，<code>justify-content: flex-end;</code>会将青蛙移到右边。</p>',
      'zh-tw':
        '<p>歡迎來到Flexbox Froggy。在遊戲中你會靠寫CSS代碼來幫助青蛙和他的朋友們！請用<code>justify-content</code>屬性指引青蛙到右邊的荷葉上。這個屬性可以水平對齊元素，並且接受一下幾個參數: </p><ul><li><code>flex-start</code>: 元素和容器的左端對齊。</li><li><code>flex-end</code>: 元素和容器的右端對齊。</li><li><code>center</code>: 元素在容器裏居中。</li><li><code>space-between</code>: 元素之間保持相等的距離。</li><li><code>space-around</code>: 元素周圍保持相等的距離。</li></ul></p>舉個例子，<code>justify-content: flex-end;</code>會將青蛙移到右邊。</p>',
      tr:
        "<p>Flexbox Froggy'ye, Froggy ve arkadaşlarına CSS kodu yazarak yardım edeceğiniz oyunumuza hoşgeldiniz! <code>justify-content</code> kuralını kullanarak bu kurbağayı sağ taraftaki nilüfer yaprağının üzerine zıplatın. Bu özellik öğeleri yatay olarak hizalar ve şu değerleri alır:</p><ul><li><code>flex-start</code>: Öğeleri flexbox container'ın sol tarafına hizalar.</li><li><code>flex-end</code>: Öğeleri flexbox container'ın sağ tarafına hizalar.</li><li><code>center</code>: Öğeleri flexbox container'ın ortasına hizalar.</li><li><code>space-between</code>: Öğeler eşit aralıklarla yatay şekilde yayılır</li><li><code>space-around</code>: Öğeler etraflarında eşit aralıklar olacak şekilde yatay şekilde yayılır</li></ul><p>Örneğin, <code>justify-content: flex-end;</code> kurbağyı sağa taşır.</p>",
      it:
        "<p>Benvenuto su Flexbox Froggy, un gioco in cui devi aiutare Froggy ed i suoi amici scrivendo codice CSS! Guida la rana verso la foglia di ninfea sulla destra usando la propieta' <code>justify-content</code>, la quale allinea gli elementi orizzontalmente e accetta i seguenti valori:</p><ul><li><code>flex-start</code>: Allinea gli elementi alla sinistra del contenitore.</li><li><code>flex-end</code>: Allinea gli elementi alla destra del contenitore.</li><li><code>center</code>: Allinea gli elementi al centro del contenitore.</li><li><code>space-between</code>: Separa gli elementi con uguale spazio tra di loro.</li><li><code>space-around</code>: Separa gli elementi con uguale spazio attorno ad essi.</li></ul><p>Per esempio, <code>justify-content: flex-end;</code> muovera' la rana sulla destra.</p>",
      ko:
        '<p>Flexbox Froggy에 오신 것을 환영합니다! Flexbox Froggy는 Froggy와 친구들 돕는 CSS 코드 게임입니다. 오른쪽의 <code>justify-content</code> 속성을 용하여 개구리가 수련잎으로 이동할 수 있도록 도와주세요. 이 속성은 다음의 값들을 인자로 받아 요소들을 가로선 상에서 정렬합니다:</p><ul><li><code>flex-start</code>: 요소들을 컨테이너의 왼쪽으로 정렬합니다.</li><li><code>flex-end</code>: 요소들을 컨테이너의 오른쪽으로 정렬합니다.</li><li><code>center</code>: 요소들을 컨테이너의 가운데로 정렬합니다.</li><li><code>space-between</code>: 요소들 사이에 동일한 간격을 둡니다.</li><li><code>space-around</code>: 요소들 주위에 동일한 간격을 둡니다.</li></ul><p>예를 들어, <code>justify-content: flex-end;</code>는 개구리를 오른쪽으로 이동시킵니다.</p>',
      lt:
        '<p>Sveiki atvykę į "Flexbox Froggy" - žaidimą, kuriame rašydami CSS kodą pagelbėsite varlytei ir jos draugams! Padėkite šiai varlytei nusigauti ant lelijos lapo dešinėje, naudodami komandą <code>justify-content</code>, kuri lygiuoja elementus horizontaliai ir reaguoja šias vertes:</p><ul><li><code>flex-start</code>: Elementai lygiuojami supančio elemento kairėje.</li><li><code>flex-end</code>: Elementai lygiuojami supančio elemento dešinėje.</li><li><code>center</code>: Elementai lygiuojami supančio elemento viduryje.</li><li><code>space-between</code>: Elementai atvaizduojami taip, kad tarpai tarp jų būtų vienodi.</li><li><code>space-around</code>: Elementai atvaizduojami su vienodais tarpais aplink juos.</li></ul><p>Pavyzdžiui, <code>justify-content: flex-end;</code> perstums varlytę į dešinę pusę.</p>',
      vi:
        '<p>Chào mừng bạn đến Flexbox Froggy, một trò chơi để bạn giúp đỡ Froggy và bạn bè bằng cách viết mã CSS! Hướng dẫn chú ếch này đến lá bông súng bên phải bằng cách sử dụng từ <code>justify-content</code> để sắp xếp các hạng mục theo chiều ngang và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp về phía bên trái của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp về phía bên phải của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>space-between</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li></ul><p>Ví dụ như, <code>justify-content: flex-end;</code> sẽ di chuyển chú ếch qua bên phải.</p>',
      pl:
        '<p>Witaj w grze Flexbox Froggy. Grze, w której pomagasz żabce Froggy i jej przyjaciołom pisząc kod CSS! Doprowadź żabki do odpowiednich listków przy pomocy <code>justify-content</code>, właściwości która wyrównuje elementy w poziomie i przyjmuje wartości:</p><ul><li><code>flex-start</code>: Elementy wyrównują się do lewej strony kontenera.</li><li><code>flex-end</code>: Elementy wyrównują się do prawej strony kontenera.</li><li><code>center</code>: Elementy wyrównują się do środka kontenera.</li><li><code>space-between</code>: Elementy wyświetlają się na całej szerokości kontenera z równymi odstępami.</li><li><code>space-around</code>: Każdy z elementów wyświetla się z taką samą ilością przestrzeni wokół.</li></ul><p>Na przykład: <code>justify-content: flex-end;</code> przesunie żabę do prawej strony.</p>',
      cs:
        '<p>Vítejte ve hře Flexbox Froggy, kde pomáháte žabce a jejím kamarádům psaním CSS stylů! Pomozte žabce dostat se na leknín vpravo vlastností <code>justify-content</code>, která zarovnává prvky vodorovně a nabývá následujících hodnot:</p><ul><li><code>flex-start</code>: Zarovnat prvky vlevo.</li><li><code>flex-end</code>: Zarovnat prvky vpravo.</li><li><code>center</code>: Zarovnat prvky na střed.</li><li><code>space-between</code>: Rozmístit rovnoměrné mezery mezi prvky.</li><li><code>space-around</code>: Rozmístit rovnoměrné mezery kolem prvků.</li></ul><p>Například styl <code>justify-content: flex-end;</code> posune žabku doprava.</p>',
      ja:
        '<p>Flexbox Froggyへようこそ！　これはカエルたちを、CSSコードを書いて助けてあげるゲームです。<code>justify-content</code>を使って、このカエルを右の蓮の葉まで連れていってあげましょう。このプロパティはアイテムを水平方向に並べるものです。以下の値を取ります。</p><ul><li><code>flex-start</code>: アイテムはコンテナーの左側に並びます。</li><li><code>flex-end</code>: アイテムはコンテナーの右側に並びます。</li><li><code>center</code>: アイテムはコンテナーの中央に並びます。</li><li><code>space-between</code>: アイテムはその間に等しい間隔を空けて表示されます。</li><li><code>space-around</code>: アイテムはその周囲に等しい間隔を空けて表示されます。</li></ul><p>例えば、<code>justify-content: flex-end;</code>はカエルを右側へ動かします。</p>',
      hu:
        '<p>Üdvözlünk a Flexbox Froggy játékban, ahol segíthetsz Froggy-nak és barátainak egy kis CSS kód írásával! Vezesd ezt a békát a jobb oldali tündérrózsára a <code>justify-content</code> tulajdonság használatával, amely az elemek vízszintes igazítását teszi lehetővé a következő értékek segítségével:</p><ul><li><code>flex-start</code>: Az elemek a konténer bal oldalára igazodnak.</li><li><code>flex-end</code>: Az elemek a konténer jobb oldalára igazodnak.</li><li><code>center</code>: Az elemek a konténer közepére igazodnak.</li><li><code>space-between</code>: Az elemek úgy igazodnak, hogy köztük a hely egyenlő mértékben oszlik meg.</li><li><code>space-around</code>: Az elemek úgy igazodnak, hogy a körülöttük lévő hely egyenlő maradjon.</li></ul><p>Például a <code>justify-content: flex-end;</code> a békát a jobb oldalra mozgatja.</p>',
      eo:
        '<p>Bonvenon al Flexbox Froggy, ludo en kiu necesas helpi Froggy-on kaj liajn amikojn skribante CSS-an kodon! Gvidu tiun ranon al la dekstra nimfeofolio uzante la <code>justify-content</code> trajton, kiu liniigas elementojn horizontale kaj akceptas la sekvajn valorojn:</p><ul><li><code>flex-start</code>: Elementoj linias maldekstraflanken de la ujo.</li><li><code>flex-end</code>: Elementoj linias dekstraflanken de la ujo.</li><li><code>center</code>: Elementoj linias je la centro de la ujo.</li><li><code>space-between</code>: Elementoj afiŝas kun samaj spacoj inter ili.</li><li><code>space-around</code>: Elementoj afiŝas kun samaj spacoj ĉirkaŭ ili.</li></ul><p>Ekzemple, <code>justify-content: flex-end;</code> movos ranon dekstren.</p>',
      sv:
        '<p>Välkommen till  Flexbox Froggy, ett spel där du hjälper Froggy och vänner genom att skriva CSS-kod! Guida grodan till blombladen till höger genom att använda <code>justify-content</code> attributen, vilket justerar objekten horisontellt och accepterar följande värden:</p><ul><li><code>flex-start</code>: Objekt justeras till vänster i containern.</li><li><code>flex-end</code>: Objekt justeras till höger i containern.</li><li><code>center</code>: Objekt justeras i mitten av containern.</li><li><code>space-between</code>: Objekt justeras med lika utrymme mellan varandra.</li><li><code>space-around</code>: Objekt justeras med lika utrymme runt omkring varandra.</li></ul><p>Till exempel, <code>justify-content: flex-end;</code> flyttar grodan till höger.</p>',
      uk:
        '<p>Вітаємо у Flexbox Froggy - гра, де ви маєте допомогати жабеняті Фрогі та його друзям написанням CSS коду! Всади жабеня на лист латаття праворуч, за допомогою властивості <code>justify-content</code>, яка вирівнює елементи по горизонталі й набуває таких значень:</p><ul><li><code>flex-start</code>: Елементи вирівнюються по лівій стороні контейнера.</li><li><code>flex-end</code>: Елементи вирівнюються по правій стороні контейнера.</li><li><code>center</code>: Елементи вирівнюються по центру контейнера.</li><li><code>space-between</code>: Елементи буде зображено з рівними відступами поміж них.</li><li><code>space-around</code>: Елементи буде зображено з рівними відступами навколо них.</li></ul><p>Наприклад, <code>justify-content: flex-end;</code> пересуне жабеня праворуч.</p>',
      hi:
        '<p>आपका Flexbox Froggy में स्वागत है। इस खेल में आप CSS Code लिख कर Froggy और उसके दोस्तों की मदद करते हैं। <code>justify-content</code> प्रॉपर्टी की सहायता से मेंढकों को लिली के पत्ते तक पहुंचाइये। यह प्रॉपर्टी वस्तुओं को छैतिज रूप से संरेखित (पंक्तिबद्ध ) करती है एवं निम्न मान स्वीकार करती है। :</p><ul><li><code>flex-start</code>: यह वस्तु को कंटेनर की बाईं तरफ सरेंखित करता है।</li><li><code>flex-end</code>: यह वस्तु को कंटेनर की दाईं तरफ सरेंखित करता है। </li><li><code>center</code>: यह वस्तु को कंटेनर के मध्य में संरेखित करता है। </li><li><code>space-between</code>: यह वस्तुओं को बराबर अंतर के साथ प्रदर्शित करता है। </li><li><code>space-around</code>: यह वस्तुओं के चारों ओर के अंतर को प्रदर्शित करता है।</li></ul><p>उदाहरण के लिये, <code>justify-content: flex-end;</code> मेंढकों को दायीं तरफ पंहुचा देगा।</p>',
      sr:
        '<p>Добродошли у Флексбокс Жабца, игру у којој помажете Жабцу и пријатељима пишући CSS код! Смести жабицу на локвањ који је десно користећи <code>justify-content</code> својство (property), које поравњава елементе хоризонтално и прихвата следеће вредности:</p><ul><li><code>flex-start</code>: Елементе поравњава на леву страну контејнера.</li><li><code>flex-end</code>: Елементе поравњава на десну страну контејнера.</li><li><code>center</code>: Елементе поставља у центар контејнера.</li><li><code>space-between</code>: Елементе приказује са једнаким растојањем између елемената.</li><li><code>space-around</code>: Елементе приказује са једнаким растојањем око елемената.</li></ul><p>На пример <code>justify-content: flex-end;</code> ће померити жабицу у десно. <img src="http://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      nl:
        '<p>Welkom bij Flexbox Froggy, een spel waar je Froggy en zijn vrienden helpt door CSS code te schrijven! Leidt deze kikker naar het lelieblaadje aan de rechterkant door gebruik te maken van de <code>justify-content</code> eigenschap, deze lijnt elementen horizontaal uit, en aanvaard volgende waarden:</p><ul><li><code>flex-start</code>: Elementen aan de linkerkant van de container uitlijnen.</li><li><code>flex-end</code>: Elementen aan de rechterkant van de container uitlijnen.</li><li><code>center</code>: Elementen in het midden van de container uitlijnen.</li><li><code>space-between</code>: Elementen met gelijke spatiëring tussen hun opstellen.</li><li><code>space-around</code>: Elementen met gelijke spatiëring rond hun opstellen.</li></ul><p>Bijvoorbeeld, <code>justify-content: flex-end;</code> zal de kikker naar rechts bewegen <img src="http://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      ta:
        '<p>Flexbox Froggy-கு வரவேற்கிறோம், இந்த விளையாட்டில் நீங்கள் CSS குறியீடு எழுதி தவளை மற்றும் அதன் நண்பர்களுக்கு உதவலாம்.! பின்வரும் குறியீடு பயன்படுத்தி இந்த தவளை வலதுபுறம் உள்ள இலையின் மீது அமர வழிகாட்டுங்கள். <code>justify-content</code> -என்கிற property கிடைமட்டமாக பொருட்களை சீரமைக்கும் மற்றும் பின்வரும் மதிப்புகளை ஏற்றுக்கொள்ளும்:</p><ul><li><code>flex-start</code>: Items வலது பக்கமாக ஒதுக்கப்படும். </li><li><code>flex-end</code>: Items இடது  பக்கமாக ஒதுக்கப்படும்.</li><li><code>center</code>: Items மையப்பகுதியில்  பக்கமாக ஒதுக்கப்படும்.</li><li><code>space-between</code>: Items இடைவெளியில் சமமான இடைவெளி விடப்படும்.</li><li><code>space-around</code>: Items சுற்றி சமமான இடைவெளி விடப்படும்.</li></ul><p>உதாரணமாக, <code>justify-content: flex-end;</code> தவளையை இடது பக்கமாக நகர்த்தி வைக்கும். <img src="http://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      ml:
        '<p>Flexbox Froggy- ലേക്ക് സ്വാഗതം, നിങ്ങൾ Froggy ഉം സുഹൃത്തുക്കളും CSS കോഡ് എഴുതുക വഴി സഹായിക്കുന്ന ഒരു ഗെയിം! <code>justify-content</code> എന്ന പ്രോപ്പർട്ടി ഉപയോഗിച്ച് ഫ്രോഗി യെ വലതു വശത്തുള്ള താമരപ്പൂവിന്റെ ഇലയിലേക്കു എത്തിക്കുക</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: ഇനങ്ങൾ കണ്ടെയ്നറിൽ ഇടത്തേക്ക് അലൈൻ ചെയ്യുക</li><li><code>center</code>: വസ്തുക്കൾ അലൈക്റ്ററിന്റെ മധ്യഭാഗത്തേക്ക് അലൈൻ ചെയ്യുക</li><li><code>space-between</code>: ഇനങ്ങൾ തമ്മിൽ തുല്യ ഇടവേളയിൽ പ്രദർശിപ്പിക്കും.</li><li><code>space-around</code>: ഇനങ്ങൾ അവയ്ക്ക് തുല്യമായ സ്പെയ്സിംഗ് ഉപയോഗിച്ച് കാണാം.</li></ul><p>ഉദാഹരണത്തിന്, <code>justify-content: flex-end;</code> വലതുവശത്തേക്ക് തവളയെ മറ്റും. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      el:
        '<p>Καλωσήλθατε στο Flexbox Froggy, ένα παιχνίδι όπου βοηθάτε τον Froggy και τους φίλους του γράφοντας κώδικα CSS! Οδηγήστε αυτόν τον βάτραχο στο νούφαρο στα δεξιά χρησιμοποιώντας την ιδιότητα <code>justify-content</code>, που ευθυγραμμίζει αντικείμενα στον οριζόντιο άξονα και αποδέχεται τις εξής αξίες:</p><ul><li><code>flex-start</code>: Τα αντικείμενα ευθυγραμμίζονται στην αριστερή πλευρά του container.</li><li><code>flex-end</code>: Τα αντικείμενα ευθυγραμμίζονται στην δεξιά πλευρά του container.</li><li><code>center</code>: Τα αντικείμενα ευθυγραμμίζονται στο κέντρο του container.</li><li><code>space-between</code>: Τα αντικείμενα εμφανίζονται με ίσο διάστημα ανάμεσά τους.</li><li><code>space-around</code>: Τα αντικείμενα εμφανίζονται με ίσο διάστημα γύρω τους.</li></ul><p>Λόγου χάρη, το <code>justify-content: flex-end;</code> θα μετακινήσει τον βάτραχο στα δεξιά. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      mk:
        '<p>Добродојдовте во Flex Froggy, игра каде што му помагате на Froggy и на неговите пријатели со пишување на CSS код! Водете го ова жабче до листот на десно со користење на <code>justify-content</code> својството, кое подредува елементи хоризонтално и ги прима следниве вредности:</p><ul><li><code>flex-start</code>: Елементите се подредуваат по левата страна на контејнерот.</li><li><code>flex-end</code>: Елементите се подредуваат по десната страна на контејнерот.</li><li><code>center</code>: Елементите се подредуваат во средината на контејнерот.</li><li><code>space-between</code>: Елементите се подредуваат со еднакво растојание помеѓу нив.</li><li><code>space-around</code>: Елементите се подредуваат со еднакво растојание околу нив.</li></ul><p>На пример, <code>justify-content: flex-end;</code> ќе ја помести жабата кон десно. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      uz:
        "<p>Fleksboks oshxonasiga xush kelibsiz. Bu o'yinda siz oshxonadagi xizmatchiga CSS buyruqlarni yozib xontaxtada somsalarni o'z likoplariga joylashga yordam berasiz. Xontaxtani biz Fleksboks idishi sifatida qo'llaymiz. <code>justify-content</code> xususiyatidan foydalanib bu somsani o'ng tomondagi likopga joylang. Bu xususiyat buyumlarni yotiq o'q (chapdan o'nga) bo'yicha saflaydi va quyidagi qiymatlarning biriga ega bo'ladi:</p><ul><li><code>flex-start</code> – buyumlarni idishning chap tomoniga saflash.</li><li><code>flex-end</code> – buyumlarni idishning o'ng tomoniga saflash.</li><li><code>center</code> – buyumlarni idishning o'rtasiga saflash.</li><li><code>space-between</code> – buyumlarni orasida teng masofa bilan saflash.</li><li><code>space-around</code> – buyumlarni atrofida teng masofa bilan saflash.</li><li><code>space-evenly</code> – <code>space-between</code> kabi, lekin chegaralargacha masofa ham inobatga olinadi.</li></ul><p>Masalan <code>justify-content: flex-end;</code> somsani o'ngga joylaydi.</p>"
    },
    board: 'g',
    style: { 'justify-content': 'flex-end' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'justify-content 2',
    instructions: {
      en:
        '<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
      ro:
        '<p>Folosește <code>justify-content</code> din nou ca sa ajuți aceste broaște să ajungă pe nuferii lor. Ține minte că această proprietate CSS aliniază elementele orizontal și acceptă următoarele valori:</p><ul><li><code>flex-start</code>: Elementele se aliniază pe partea stangă a containerului.</li><li><code>flex-end</code>: Elementele se aliniază pe partea dreaptă a containerului.</li><li><code>center</code>: Elementele se aliniază pe centrul containerului.</li><li><code>space-between</code>: Elementele se afișează cu spațiu egal între ele.</li><li><code>space-around</code>: Elementele se afișează cu spațiu egal în jurul lor.</li></ul>',
      bg:
        '<p>Използвай <code>justify-content</code> отново, за да помогнеш на тези жабчета да достигнат до своите листа. Помни, че това CSS свойство подрежда елементите хоризонтално и приема следните стойности:</p><ul><li><code>flex-start</code>: Елементите се подреждат в лявата страна на контейнера.</li><li><code>flex-end</code>: Елементите се подреждат в дясната страна на контейнера.</li><li><code>center</code>: Елементите се подреждат в средата на контейнера.</li><li><code>space-between</code>: Елементите се подреждат с равно разстояние помежду им.</li><li><code>space-around</code>: Елементите се подреждат с равно разстояние около тях.</li></ul>',
      de:
        '<p>Benutze erneut <code>justify-content</code>, um diese Fr&ouml;sche zu ihren Seerosenbl&auml;ttern zu f&uuml;hren. Wie du wei&szlig;t richtet diese Eigenschaft die Elemente horizontal aus, und akzeptiert die folgenden Werte:</p><ul><li><code>flex-start</code>: Elemente an der linken Seite des Containers ausrichten.</li><li><code>flex-end</code>: Elemente an der rechten Seite des Containers ausrichten.</li><li><code>center</code>: Elemente an der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Elemente mit gleichem Innenabstand ausrichten.</li><li><code>space-around</code>: Elemente mit gleichem Au&szlig;enabstand ausrichten.</li></ul>',
      'pt-br':
        '<p>Use <code>justify-content</code> de novo para levar os sapos às suas vitórias-régias. Lembre-se que essa propriedade CSS alinha os itens horizontalmente e  aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham à esquerda do container.</li><li><code>flex-end</code>: Itens se alinham à direita do container.</li><li><code>center</code>: Itens se alinham no centro do container.</li><li><code>space-between</code>: Itens se alinham com distância igual entre eles.</li><li><code>space-around</code>: Itens se alinham com distância igual em torno deles.</li></ul>',
      es:
        '<p>Nuevamente, utiliza <code>justify-content</code> para ayudar a esas ranas a llegar a sus hojas de lirio. Recuerda que esta propiedad CSS alinea elementos horizontalmente y acepta los siguientes valores:<ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contenedor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul>',
      fr:
        "<p>Utilisez encore <code>justify-content</code> pour aider ces grenouilles à se rendre à leurs nénuphars. Souvenez-vous que cette propriété CSS aligne les éléments horizontalement et accepte les valeurs suivantes&nbsp;: </p><ul><li><code>flex-start</code>&nbsp;: Les éléments s'alignent au côté gauche du conteneur.</li><li><code>flex-end</code> : Les éléments s'alignent au côté droit du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s'alignent au centre du conteneur.</li><li><code>space-between</code>&nbsp;: Les éléments s'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les éléments s'affichent avec un espacement égal à l'entour d'eux.</li></ul>",
      ru:
        '<p>Используй <code>justify-content</code> еще раз, чтоб помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul>',
      fa:
        '<p>با استفاده از خصوصیت <code>justify-content</code> به این قورباغه ها کمک کنید تا روی نیلوفرهای آبی قرار بگیرند. فراموش نکنید که این خاصیت در محور افقی کار میکند.</p><ul><li><code>flex-start</code>:  آیتم‌ها از ابتدای <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>flex-end</code>: آیتم‌ها از انتهای <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>center</code>: آیتم‌ها از وسط <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>space-between</code>: آیتم اول در ابتدا و آیتم آخر در انتهای <span class="en-font">flex line</span> قرار می گیرند و بقیه آیتم ها در بین آنها با یک فاصله ی برابر قرار می‌گیرند. </li><li><code>space-around</code>: آیتم ها با فضای برابر در کنار یکدیگر قرار می‌گیرند.</li></ul>',
      'zh-cn':
        '<p>再用<code>justify-content</code>一次来帮助这些青蛙到他们的荷叶上。记住这个CSS属性能水平对齐元素，并接受这些参数：</p><ul><li><code>flex-start</code>: 元素和容器的左端对齐。</li><li><code>flex-end</code>: 元素和容器的右端对齐。</li><li><code>center</code>: 元素在容器里居中。</li><li><code>space-between</code>:元素之间保持相等的距离。</li><li><code>space-around</code>:元素周围保持相等的距离。</li>',
      'zh-tw':
        '<p>再用<code>justify-content</code>一次來幫助這些青蛙到他們的荷葉上。記住這個CSS屬性能水平對齊元素，並接受這些參數: </p><ul><li><code>flex-start</code>: 元素和容器的左端對齊。</li><li><code>flex-end</code>: 元素和容器的右端對齊。</li><li><code>center</code>: 元素在容器裏居中。</li><li><code>space-between</code>: 元素之間保持相等的距離。</li><li><code>space-around</code>: 元素周圍保持相等的距離。</li>',
      tr:
        "<p>Tekrar <code>justify-content</code> kullanarak bu kurbağaları nilüfer yapraklarının üzerine çıkartın. Bu CSS kuralının öğeleri yatay olarak hizaladığını ve şu değerleri aldığını unutmayın:</p><ul><li><code>flex-start</code>: Öğeleri flexbox container'ın sol tarafına hizalar.</li><li><code>flex-end</code>: Öğeleri flexbox container'ın sağ tarafına hizalar.</li><li><code>center</code>: Öğeleri flexbox container'ın ortasına hizalar.</li><li><code>space-between</code>: Öğeler eşit aralıklarla yatay şekilde yayılır</li><li><code>space-around</code>: Öğeler etraflarında eşit aralıklar olacak şekilde yatay şekilde yayılır</li></ul>",
      it:
        '<p>Usa ancora <code>justify-content</code> per aiutare le rane a raggiungere le ninfee. Ricorda che questa regola CSS allinea gli elementi orizzontalmente e accetta i seguenti valori:</p><ul><li><code>flex-start</code>: Allinea gli elementi alla sinistra del loro contenitore.</li><li><code>flex-end</code>: Allinea gli elementi alla destra del loro contenitore.</li><li><code>center</code>: Allinea gli elementi al centro del loro contenitore.</li><li><code>space-between</code>: Separa gli elementi con uguale spazio tra di loro.</li><li><code>space-around</code>: Separa gli elementi con uguale spazio attorno a loro.</li></ul>',
      ko:
        '<p><code>justify-content</code>를 한 번 더 사용하여 개구리들이 수련잎으로 이동하는 것을 도와주세요. 이 CSS 속성은 요소들을 가로선 상에서 정렬하며 다음의 값들을 인자로 받는다는 것을 기억하세요:</p><ul><li><code>flex-start</code>: 요소들을 컨테이너의 왼쪽으로 정렬합니다.</li><li><code>flex-end</code>: 요소들을 컨테이너의 오른쪽으로 정렬합니다.</li><li><code>center</code>: 요소들을 컨테이너의 가운데로 정렬합니다.</li><li><code>space-between</code>: 요소들 사이에 동일한 간격을 둡니다.</li><li><code>space-around</code>: 요소들 주위에 동일한 간격을 둡니다.</li></ul>',
      lt:
        '<p>Panaudokite <code>justify-content</code> dar kartą, kad padėtumėte varlytėms nusigauti ant lelijos lapų. Nepamirškite, kad ši CSS komanda lygiuoja elementus horizontaliai ir reaguoja į šias vertes:</p><ul><li><code>flex-start</code>: Elementai lygiuojami supančio elemento kairėje.</li><li><code>flex-end</code>: Elementai lygiuojami supančio elemento dešinėje.</li><li><code>center</code>: Elementai lygiuojami supančio elemento viduryje.</li><li><code>space-between</code>: Elementai atvaizduojami taip, kad tarpai tarp jų būtų vienodi.</li><li><code>space-around</code>: Elementai atvaizduojami su vienodais tarpais aplink juos.</li></ul>',
      vi:
        '<p>Sử dụng <code>justify-content</code> một lần nữa để giúp đỡ những chú ếch này đến các lá bông súng. Hãy nhớ rằng thuộc tính CSS này dùng để sắp xếp các hạng mục theo chiều ngang và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp về phía bên trái của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp về phía bên phải của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>space-between</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li></ul>',
      pl:
        '<p>Użyj <code>justify-content</code> ponownie, aby pomóc żabkom dotrzeć do swoich listków. Pamiętaj, że ta właściwość języka CSS wyrównuje elementy w poziomie i przyjmuje wartości:</p><ul><li><code>flex-start</code>: Elementy wyrównują się do lewej strony kontenera.</li><li><code>flex-end</code>: Elementy wyrównują się do prawej strony kontenera.</li><li><code>center</code>: Elementy wyrównują się do środka kontenera.</li><li><code>space-between</code>: Elementy wyświetlają się na całej szerokości kontenera z równymi odstępami.</li><li><code>space-around</code>: Każdy z elementów wyświetla się z taką samą ilością przestrzeni wokół.</li></ul>',
      cs:
        '<p>Použijte teď <code>justify-content</code> tak, aby se žabky dostaly na své lekníny. Připomeňte si, že tato CSS vlastnost zarovnává prvky vodorovně a akceptuje následující hodnoty:</p><ul><li><code>flex-start</code>: Zarovnat prvky vlevo.</li><li><code>flex-end</code>: Zarovnat prvky vpravo.</li><li><code>center</code>: Zarovnat prvky na střed.</li><li><code>space-between</code>: Rozmístit rovnoměrné mezery mezi prvky.</li><li><code>space-around</code>: Rozmístit rovnoměrné mezery kolem prvků.</li></ul>',
      ja:
        '<p>もう一度<code>justify-content</code>を使って、カエルたちを蓮の葉まで連れていきましょう。覚えていますか、このCSSプロパティはアイテムを水平に並べるもので、次の値を取ります。</p><ul><li><code>flex-start</code>: アイテムはコンテナーの左側に並びます。</li><li><code>flex-end</code>: アイテムはコンテナーの右側に並びます。</li><li><code>center</code>: アイテムはコンテナーの中央に並びます。</li><li><code>space-between</code>: アイテムはその間に等しい間隔を空けて表示されます。</li><li><code>space-around</code>: アイテムはその周囲に等しい間隔を空けて表示されます。</li></ul>',
      hu:
        '<p>Használd ismét a <code>justify-content</code> tulajdonságot, hogy a békákat a tündérrózsáikhoz segíthesd. Ne feledd, hogy ez a CSS tulajdonság az elemeket vízszintesen igazítja és a következő értékeket kaphatja: </p><ul><li><code>flex-start</code>: Az elemek a konténer bal oldalára igazodnak .</li><li><code>flex-end</code>: Az elemek a konténer jobb oldalára igazodnak.</li><li><code>center</code>: Az elemek a konténer közepére igazodnak.</li><li><code>space-between</code>: Az elemek úgy igazodnak, hogy köztük a hely egyenlő mértékben oszlik meg.</li><li><code>space-around</code>: Az elemek úgy igazodnak, hogy a körülöttük lévő hely egyenlő maradjon.</li></ul>',
      eo:
        '<p>Uzu <code>justify-content</code> de nove por helpi ĉiujn ranojn atingi iliajn akvolilifoliojn. Memoru ke ĉi tiu CSS-an trajton liniigas horizontale elementojn kaj akceptas la sekvajn valorojn:</p><ul><li><code>flex-start</code>: Elementoj linias maldekstraflanken de la ujo.</li><li><code>flex-end</code>: Elementoj linias dekstraflanken de la ujo.</li><li><code>center</code>: Elementoj linias je la centro de la ujo.</li><li><code>space-between</code>: Elementoj afiŝas kun samaj spacoj inter ili.</li><li><code>space-around</code>: Elementoj afiŝas kun samaj spacoj ĉirkaŭ ili.</li></ul>',
      sv:
        '<p>Använd <code>justify-content</code> igen för att hjälpa grodorna till sina blomblad. Kom ihåg att denna CSS-attribut justerar objekten horisontellt och accepterar följande värden:</p><ul><li><code>flex-start</code>: Objekt justeras till vänster i containern.</li><li><code>flex-end</code>: Objekt justeras till höger i containern.</li><li><code>center</code>: Objekt justeras i mitten av containern.</li><li><code>space-between</code>: Objekt justeras med lika utrymme mellan varandra.</li><li><code>space-around</code>: Objekt justeras med lika utrymme runt omkring varandra.</li></ul><p>Till exempel, <code>justify-content: flex-end;</code> flyttar grodan till höger.</p>',
      uk:
        '<p>Скористайся <code>justify-content</code> ще раз, та допоможи жабенятам потрапити на свої листи латаття. Памʼятай, що ця CSS-властивість набуває таких значень:</p><ul><li><code>flex-start</code>: Елементи вирівнюються по лівій стороні контейнера.</li><li><code>flex-end</code>: Елементи вирівнюються по правій стороні контейнера.</li><li><code>center</code>: Елементи вирівнюються по центру контейнера.</li><li><code>space-between</code>: Елементи буде зображено з рівними відступами поміж них.</li><li><code>space-around</code>: Елементи буде зображено з рівними відступами навколо них.</li></ul>',
      hi:
        '<p><code>justify-content</code> की सहायता से मेंढकों को पुनः उनके लिली के पत्ते तक पहुंचाइए. याद रखिये की यह CSS प्रॉपर्टी वस्तुओं को छैतिज रूप से संरेखित करती है:</p><ul><li><code>flex-start</code>: यह वस्तु को कंटेनर की बाईं तरफ सरेंखित करता है।</li><li><code>flex-end</code>: यह वस्तु को कंटेनर की दाईं तरफ सरेंखित करता है। </li><li><code>center</code>: यह वस्तु को कंटेनर के मध्य में संरेखित करता है। </li><li><code>space-between</code>: यह वस्तुओं को बराबर अंतर के साथ प्रदर्शित करता है। </li><li><code>space-around</code>: यह वस्तुओं के चारों ओर के अंतर को प्रदर्शित करता है।</li></ul>',
      sr:
        '<p>Користи опет <code>justify-content</code> да би помогао/ла жабицама да стигну до својих локвања. Присети се да ово CSS својство поравњава елементе хоризонтално и прихвата следеће вредности:</p><ul><li><code>flex-start</code>: Елементе поравњава на леву страну контејнера.</li><li><code>flex-end</code>: Елементе поравњава на десну страну контејнера.</li><li><code>center</code>: Елементе поставља у центар контејнера.</li><li><code>space-between</code>: Елементе приказује са једнаким растојањем између елемената.</li><li><code>space-around</code>: Елементе приказује са једнаким растојањем око елемената.</li></ul>',
      nl:
        '<p>Maak nogmaals gebruik van <code>justify-content</code> om de kikkers naar hun lelieblaadjes te helpen. Vergeet niet dat deze CSS eigenschap elementen horizontaal uitlijnt en de volgende waarden kan ontvangen:</p><ul><li><code>flex-start</code>: Elementen aan de linkerkant van de container uitlijnen.</li><li><code>flex-end</code>: Elementen aan de rechterkant van de container uitlijnen.</li><li><code>center</code>: Elementen in het midden van de container uitlijnen.</li><li><code>space-between</code>: Elementen worden gedistribueerd over de volledige dimensie en krijgen een gelijke spatiëring tussen hun.</li><li><code>space-around</code>: Elementen worden gedistribueerd over de volledige dimensie en krijgen een gelijke spatiëring rondom hun.</li></ul>',
      ta:
        '<p>மீண்டும் <code>justify-content</code> பயன்படுத்தி, தவளை அதற்கான இலையினை அடைய உதவவும். இந்த CSS property கிடைமட்டமாக பொருட்களை சீரமைக்கும் மற்றும் பின்வரும் மதிப்புகளை ஏற்றுக்கொள்ளும் என்பதை நினைவில் கொள்ளவும்.</p><ul><li><code>flex-start</code>: Items வலது பக்கமாக ஒதுக்கப்படும். </li><li><code>flex-end</code>: Items இடது  பக்கமாக ஒதுக்கப்படும்.</li><li><code>center</code>: Items மையப்பகுதியில்  பக்கமாக ஒதுக்கப்படும்.</li><li><code>space-between</code>: Items இடைவெளியில் சமமான இடைவெளி விடப்படும்.</li><li><code>space-around</code>: Items சுற்றி சமமான இடைவெளி விடப்படும்.</li></ul>',
      ml:
        '<p><code>justify-content</code> ഉപയോഗിച്ച് തവളകളെ തിരിച്ചു താമര ഇലകളിലേക്കു എത്തിക്കുക. തിരശ്ചീനമായി ആണ് ഈ പ്രോപ്പർട്ടി വിന്യസിക്കുന്നത് എന്ന് ഓർക്കുക </p><ul><li><code>flex-start</code>: ഇനങ്ങൾ കണ്ടെയ്നറിന്റെ ഇടതുവശത്തേക്ക് വിന്യസിക്കുക.</li><li><code>flex-end</code>: ഇനങ്ങൾ കണ്ടെയ്നറിന്റെ വലതുവശത്തേക്ക് വിന്യസിക്കുക.</li><li><code>center</code>: ഇനങ്ങളുടെ മധ്യഭാഗത്ത് ഇനങ്ങൾ വിന്യസിക്കുക.</li><li><code>space-between</code>: ഇനങ്ങൾ തമ്മിൽ തുല്യ ഇടവേളയിൽ പ്രദർശിപ്പിക്കും.</li><li><code>space-around</code>: ഇനങ്ങൾ അവയ്ക്ക് തുല്യമായ സ്പെയ്സിംഗ് ഉപയോഗിച്ച് കാണാം.</li></ul>',
      el:
        '<p>Χρησιμοποιήστε ξανά το <code>justify-content</code> για να βοηθήσετε αυτούς τους βατράχους να φτάσουν στα νούφαρά τους. Θυμηθείτε ότι η ιδιότητα CSS ευθυγραμμίζει αντικείμενα στον οριζόντιο άξονα και αποδέχεται τις εξής αξίες:</p><ul><li><code>flex-start</code>: Τα αντικείμενα ευθυγραμμίζονται στην αριστερή πλευρά του container.</li><li><code>flex-end</code>: Τα αντικείμενα ευθυγραμμίζονται στην δεξιά πλευρά του container.</li><li><code>center</code>: Τα αντικείμενα ευθυγραμμίζονται στο κέντρο του container.</li><li><code>space-between</code>: Τα αντικείμενα εμφανίζονται με ίσο διάστημα ανάμεσά τους.</li><li><code>space-around</code>: Τα αντικείμενα εμφανίζονται με ίσο διάστημα γύρω τους.</li></ul>',
      mk:
        '<p>Користете <code>justify-content</code> повторно за да им помогнете на овие жаби да стигнат до своите листови. Запомнете дека ова CSS својство подредува елементи хоризонтално и ги прима следните вредности:</p><ul><li><code>flex-start</code>: Елементите се подредуваат по левата страна на контејнерот.</li><li><code>flex-end</code>: Елементите се подредуваат по десната страна на контејнерот.</li><li><code>center</code>: Елементите се подредуваат во средината на контејнерот.</li><li><code>space-between</code>: Елементите се подредуваат со еднакво растојание помеѓу нив.</li><li><code>space-around</code>: Елементите се подредуваат со еднакво растојание околу нив.</li></ul>',
      uz:
        "<p>Somsalarni yana o'z likoplariga joylash uchun <code>justify-content</code> xususiyatidan foydalaning. Esingizda tursin, bu CSS xususiyat buyumlarni yotiq o'q bo'yicha saflaydi va quyidagi qiymatlarning biriga ega bo'ladi:</p><ul><li><code>flex-start</code> – buyumlarni idishni chap tomoniga saflash.</li><li><code>flex-end</code> – buyumlarni idishni o'ng tomoniga saflash.</li><li><code>center</code> – buyumlarni idishni o'rtasiga saflash.</li><li><code>space-between</code> – buyumlarni orasida teng masofa bilan saflash.</li><li><code>space-around</code> – buyumlarni atrofida teng masofa bilan saflash.</li><li><code>space-evenly</code> – <code>space-between</code> kabi, lekin chegaralargacha masofa ham inobatga olinadi.</li></ul>"
    },
    board: 'gy',
    style: { 'justify-content': 'center' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'justify-content 3',
    instructions: {
      en:
        '<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can hover over the property name to view them. Try hovering over <code>justify-content</code>.</p>',
      ro:
        '<p>Ajută-le pe cele trei broaște să-și găsească nuferii folosind doar <code>justify-content</code>. De această dată, nuferii au foarte mult spațiu între ei.</p><p>Dacă nu-ți mai amintești posibilele valori ale unei proprietăți, poți să faci hover peste numele unei proprietăți pentru a le vedea. Incearcă să faci hover pe <code>justify-content</code>.</p>',
      bg:
        '<p>Помогни на трите жабчета да намерят своите листа, използвайки <code>justify-content</code>. Този път листата имат доста място около себе си.</p><p>Ако забравиш някоя от възможните стойности на дадено свойство, можеш да посочиш с мишката върху името на свойството, за да ги видиш. Опитай да посочиш върху <code>justify-content</code>.</p>',
      de:
        '<p>Hilf den drei Fr&ouml;schen, ihre Seerosenbl&auml;tter zu finden, indem du <code>justify-content</code> verwendest. Dieses Mal haben die Seerosenbl&auml;tter einen gro&szlig;en Au&szlig;enabstand.</p><p>Falls du die m&ouml;glichen Werte einer Eigenschaft vergessen haben solltest, kannst du den Mauszeiger &uuml;ber den Namen einer Eigenschaft bewegen. Versuche es bei <code>justify-content</code>.</p>',
      'pt-br':
        '<p>Ajude todos os três sapos a encontrar suas vitórias-régias usando <code>justify-content</code>. Desta vez, as vitórias-régias têm muito espaço em torno delas.</p><p>Caso você esqueça os possíveis valores de uma propriedade, passe o cursor sobre a propriedade para visualizá-los. Tente passar o cursor sobre <code>justify-content</code>.</p>',
      es:
        '<p>Ayuda a las tres ranas a encontrar sus hojas de lirio usando <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen mucho espacio a su alrededor.</p><p>Si no recuerdas los valores de una propiedad, puedes pasar el cursor sobre el nombre de una e inmediatamente se mostrarán. Prueba pasando el cursor sobre <code>justify-content</code>.</p>',
      fr:
        "<p>Aidez les trois grenouilles à trouver leurs nénuphars en utilisant seulement <code>justify-content</code>. Cette fois-ci, les nénuphars ont beaucoup d'espace tout autour d'eux.</p><p>Si vous oubliez les valeurs possibles pour une propriété, vous pouvez survoler le nom de cette propriété pour les voir. Essayez de survoler <code>justify-content</code>.</p>",
      ru:
        '<p>Помоги всем трем лягушатам найти их лилии, просто используя <code>justify-content</code>. В этот раз, у лилий много пространства вокруг.</p><p>Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтоб посмотреть их. Попробуй навести курсор на <code>justify-content</code>.</p>',
      fa:
        '<p>با استفاده از <code>justify-content</code> به این سه قورباغه کمک کنید تا نیلوفرهای آبی خود را پیدا کنند. حواستون به این نکته باشه که نیلوفرهای آبی با فاصبه برابر کنار هم قرار گرفتند.</p><p>اگر مقادیر این خاصیت را فراموش کردید, میتونید با قرار دادن ماوس روی خاصیت مقادیر را ببینید. <code>justify-content</code>.</p>',
      'zh-cn':
        '<p>仅靠<code>justify-content</code>来帮助全部三只青蛙找到他们的荷叶。这次荷叶周边都有很多的空地。</p><p>如果你忘了一个CSS属性可选的值的话，你可以将鼠标移到参数名上面来查看。试试将鼠标移到<code>justify-content</code>。</p>',
      'zh-tw':
        '<p>僅靠<code>justify-content</code>來幫助全部三隻青蛙找到他們的荷葉。這次荷葉周邊都有很多的空地。</p><p>如果你忘了一個CSS屬性可選的值的話，你可以將鼠標移到參數名上面來查看。試試將鼠標移到<code>justify-content</code>。</p>',
      tr:
        '<p><code>justify-content</code> kuralını kullanarak üç kurbağanın da kendi nilüfer yaprağını bulmasını sağlayın. Bu serfer, nilüfer yaprakları etrafında bolca boş alan var.</p><p> Olur da bir kuralın alabileceği değerleri unutursanız, o kuralın üzerine farenizi götürerek değerlerini görebilirsiniz. Farenizi <code>justify-content</code> üzerine götürmeyi deneyin.</p>',
      it:
        "<p>Aiuta le tre rane a raggiungere le ninfee usando la propriera' <code>justify-content</code>. Fai attenzione, questa volta le ninfee hanno molto spazio attorno a loro.</p><p>Se ti sei dimenticato alcuni valori per le proprieta' CSS puoi portare il mouse sopra il nome della proprieta' per visualizzare tutti i valori disponibili. Prova portando il cursore sopra <code>justify-content</code>.</p>",
      ko:
        '<p><code>justify-content</code>를 사용하여 세마리의 개구리가 모두 수련잎으로 이동할 수 있도록 도와주세요. 이번에는 수련잎 주위에 많은 간격이 있습니다.</p><p>만약 이 속성에서 사용 가능한 인자들이 기억나지 않는다면, 포인터를 속성 이름 위로 이동시키세요. <code>justify-content</code> 위로 포인터를 이동시켜 보세.</p>',
      lt:
        '<p>Padėkite visoms trims varlytėms pasiekti savo lelijos lapus naudodami <code>justify-content</code>. Šį kartą aplink lelijos lapus yra labai daug vietos.</p><p>Jei netikėtai pamiršote galimas šios komandos vertes, jas prisiminti galite užvedę žymeklį ant komandos pavadinimo. Pabandykite užvesti žymeklį ant <code>justify-content</code>.</p>',
      vi:
        '<p>Giúp tất cả ba chú ếch tìm những lá bông súng của họ bằng cách sử dụng <code>justify-content</code>. Lần này, những lá bông súng có rất nhiều không gian xung quanh chúng. </p><p>Nếu bạn thấy mình đang quên đi những giá trị cho thuộc tính này, bạn có thể di chuột qua từ đó để xem chúng. Hãy thử di chuột qua từ này<code>justify-content</code>.</p>',
      pl:
        '<p>Pomóż wszystkim żabkom dotrzeć do ich listków przy pomocy tylko właściwości <code>justify-content</code>. Tym razem, listki mają dużo miejsca wokół.</p><p>Jeśli nie pamiętasz jakie wartości przyjmuje ta właściowość możesz najechać myszką na jej nazwę, aby je zobaczyć. Spróbuj przesunąć myszkę nad <code>justify-content</code>.</p>',
      cs:
        '<p>Pomozte těmto třem žabkám na jejich lekníny vlastností <code>justify-content</code>. Tentokrát je mezi lekníny hodně místa.</p><p>Pokud zapomenete, jaké hodnoty lze pro kterou vlastnost použít, najeďte na ni myší. Zkuste najet na <code>justify-content</code>.</p>',
      ja:
        '<p><code>justify-content</code>だけを使って三匹のカエルを全て蓮の葉に乗せてあげましょう。この蓮の葉は、それぞれの周囲にたくさんの隙間が空いています。</p><p>プロパティーが取り得る値を忘れてしまったら、プロパティー名にマウスカーソルを乗せると、それを見ることができます。試しにマウスカーソルを<code>justify-content</code>に乗せてみてください。</p>',
      hu:
        '<p>Segíts mindhárom békának megtalálni a saját tündérrózsáját pusztán a <code>justify-content</code> használatával. Ezúttal a tündérrózsák körül meglehetősen sok hely van.</p><p>Ha úgy érzed, elfelejtetted a lehetséges értékeket ehhez a tulajdonsághoz, vidd az egérkurzort a tulajdonság neve fölé, hogy láthasd őket. Próbáld ki a <code>justify-content</code>-en.</p>',
      eo:
        '<p>Helpu ĉi tiujn tri ranojn trovi iliajn nimfeofoliojn nur pere de <code>justify-content</code>. Ĉifoje, la nimfeofolioj havas multe da spaco ĉirkaŭ ili.</p><p>Se vi forgesas la eblan valoron por trajton, vi povas ŝvebi sur la nomon de la trajto por afiŝi ilin. Provu ŝvebi sur <code>justify-content</code>.</p>',
      sv:
        '<p>Hjälp alla tre grodorna tillbaka till sina blombald genom att använda <code>justify-content</code>. Denna gången har blombladen mycket utrymme runt omkring varandra.</p><p>Om du glömmer bort de accepterade värdena för en attribut kan du föra musen över dem för att se dem. Testa att föra musen över <code>justify-content</code>.</p>',
      uk:
        '<p>Допоможи трьом жабенятам опинитися на своїх листах латаття, використовуючи <code>justify-content</code>. Але цього разу між листками є багато простору.</p><p>Якщо ти забув можливі значення властивості, ти можеш навести на назву властивості для підказки. Спробуй навести на <code>justify-content</code>.</p>',
      hi:
        '<p>तीनों मेंढकों को <code>justify-content</code> की मदद से उनके लिली के पत्ते तक पहुंचाइए। इस समय लिली के पत्तों के चारों ओर काफी जगह मोजूद है।</p><p>अगर आप किसी प्रॉपर्टी का महत्व भूल रहें हैं तो आप उस प्रॉपर्टी के उपर होवर करते हुए उसका महत्व जान सकते हैं।<code>justify-content</code> के उपर होवर करने की कोशिश कीजिये।</p>',
      sr:
        '<p>Помози да све три жабице нађу своје локвање користећи само <code>justify-content</code>. Овог пута локвањи имају много простора око себе.</p><p>Ако си заборавио/ла могуће вредности за својство, можеш прећи курсором преко назива својства да би их видео. Пробај да пређеш курсором преко <code>justify-content</code>.</p>',
      nl:
        '<p>Help alle drie kikkers naar hun lelieblaadjes door gebruik te maken van <code>justify-content</code>. Deze keer is er veel plaats rond de lelieblaadjes.</p><p>Indien je de mogelijke waarden vergeten bent kun je altijd je cursor over de naam van de eigenschap houden. Probeer je cursor over <code>justify-content</code> te houden.</p>',
      ta:
        '<p><code>justify-content</code> பயன்படுத்தி, தவளை அதற்கான இலையினை அடைய உதவவும். இந்த முறை இலையினை சுற்றி நிறைய வெற்றிடம் இருக்கின்றது.</p><p>நீங்கள் ஒரு வேளை சாத்தியமான மதிப்புகளை மறந்து இருந்தால், பண்பின் பெயர் மீது hover செய்தால் அதன் மதிப்புகளை பார்க்கலாம். இப்போது <code>justify-content</code> மீது hover செய்து முயற்சிக்கவும்.</p>',
      ml:
        '<p><code>justify-content</code> ഉപയോഗിച്ച് തവളകളെ താമര ഇലകൾ കണ്ടുപിടിക്കാൻ സഹായിക്കുക . ഈ സമയം, lilypads അവരുടെ ചുറ്റും ധാരാളം സ്ഥലം ഉണ്ട്.</p><p>ഒരു വസ്തുവിന്റെ മൂല്യങ്ങൾ നിങ്ങൾ മറന്നുപോകുന്നതായി കണ്ടാൽ, അവ കാണുന്നതിന് നിങ്ങൾക്ക് പ്രോപ്പർട്ടിയുടെ പേരിൽ ഹോവർ ചെയ്യാം. <code>justify-content</code>.</p> ഹോവർ ചെയ്യൽ ശ്രമിക്കുക',
      el:
        '<p>Βοηθήστε και τους τρεις βατράχους να βρουν τα νούφαρά τους χρησιμοποιώντας μόνο το <code>justify-content</code>. Αυτή την φορά, τα νούφαρα έχουν άπλετο διάστημα τριγύρω τους.</p><p>Αν ξεχάσετε τις πιθανές αξίες για μια ιδιότητα, μπορείτε να βάλετε το ποντίκι σας πάνω από το όνομα της ιδιότητας για να τις δείτε. Δοκιμάστε να βάλετε το ποντίκι σας πάνω από το <code>justify-content</code>.</p>',
      mk:
        '<p>Помогнете им на сите три жаби да ги најдат своите листови само со користење на <code>justify-content</code>. Овој пат, листовите имаат многу простор околу нив.</p><p>Доколку ги заборавите можните вредности за некое својство, можете да лебдите со маусот преку името на својството за да ги видите. Пробајте да лебдите со маусот преку <code>justify-content</code>.</p>',
      uz:
        "<p>Xizmatchiga faqatgina <code>justify-content</code> xususiyatidan foydalanib bu 3 somsani o'z likoplariga joylashga yordam bering. Bu gal, likoplarning atrofida joy ko'p.</p><p>Agar bir xususiyatning ega bo'lishi mumkin bo'lgan qiymatlarni yodingizdan chiqarsangiz, siz ko'rsatgichni o'sha xususiyatga olib borib u to'g'risidagi ma'lumotni ko'rsangiz bo'ladi. <code>justify-content</code> xususiyatiga ko'rsatgichni oborib ko'ring.</p>"
    },
    board: 'gyr',
    style: { 'justify-content': 'space-around' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'justify-content 4',
    instructions: {
      en:
        '<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>',
      ro:
        '<p>Acum nuferii din margini au plutit in derivă la țârm, mărind spațiul dintre ei. Folosește <code>justify-content</code>. De această dată, nuferii au spațiu egal între ei.</p>',
      bg:
        '<p>Сега крайните листа се носят към брега, увеличавайки разстоянието между тях . Използвай <code>justify-content</code>. Този път листата имат еднакво разстояние помежду си.</p>',
      de:
        '<p>Inzwischen sind die &auml;u&szlig;eren Seerosenbl&auml;tter weiter nach au&szlig;en getrieben und haben so den Abstand noch weiter vergr&ouml;&szlig;ert. Benutze <code>justify-content</code>. Dieses Mal haben die Seerosenbl&auml;tter einen gleichm&auml;&szlig;igen Innenabstand.</p>',
      'pt-br':
        '<p>Agora as vitórias-régias nos cantos desviaram-se para a costa, aumentando o espaço em torno delas. Use <code>justify-content</code>. Desta vez, as vitórias-régias têm espaço igual entre elas.</p>',
      es:
        '<p>Ahora las hojas de lirio de los bordes se han desplazado a un costado, aumentando así el espacio entre ellas. Usa <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen el mismo espacio entre ellas.</p>',
      fr:
        "<p>Maintenant, les nénuphars sur les côtés ont dérivé jusqu'à la rive, augmentant l'espace entre eux. Utilisez <code>justify-content</code>. Cette fois-ci, l'espace entre chaque nénuphar est équivalent.</p>",
      ru:
        '<p>Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй <code>justify-content</code>. В этот раз, у лилий одинаковое расстояние между ними.</p>',
      fa:
        '<p>در حال حاضر نیلوفر های آبی به سمت لبه های ساحل حرکت کرده اند و فضای بین آنها افزایش پیدا کرده پس با استفاده از <code>justify-content</code> به قورباغه ها کمک کنید. نیلوفرهای آبی دارای فاصله مساوی هستن.</p>',
      'zh-cn':
        '<p>现在边上的荷叶都漂到了岸上，使得他们之间的间距变大了。使用<code>justify-content</code>。这次荷叶之间有相等的距离。</p>',
      'zh-tw':
        '<p>現在邊上的荷葉都漂到了岸上，使得他們之間的間距變大了。使用<code>justify-content</code>。這次荷葉之間有相等的距離。</p>',
      tr:
        '<p>Şimdi, nilüfer yaprakları sürüklenerek kıyıya vurmuşlar. <code>justify-content</code> kuralını kullanın. Bu sefer, nilüfer yaprakları arasında eşit mesafe var.</p>',
      it:
        '<p>Le ninfee sono andate alla deriva aumentando lo spazio tra di loro. Usa <code>justify-content</code>. Questa volta le ninfee sono equidistanti tra di loro.</p>',
      ko:
        '<p>수련잎이 연못가로 떠내려가면서 수련잎 사이의 간격이 넓어졌습니다. <code>justify-content</code>를 사용하세요. 이번에는 수련잎 사이에 동일한 간격이 있습니다.</p>',
      lt:
        '<p>Dabar kraštiniai lelijos lapai nuplaukė arčiau krantų, taip padidindami tarpus tarp vienas kito. Naudokite <code>justify-content</code>. Šį kartą tarpai tarp lelijos lapų yra vienodi.</p>',
      vi:
        '<p>Bây giờ những lá bông súng đã trôi dạt vào bờ, tạo thêm không gian giữa chúng. Sử dụng <code>justify-content</code>. Lần này, những lá bông súng có khoảng cách bằng nhau giữa chúng.</p>',
      pl:
        '<p>Tym razem skrajne listki odpłynęły do krańców kontenera, zwiększając odstępy. Uzyj <code>justify-content</code>. Tym razem listki mają tę samą odległość między sobą.</p>',
      cs:
        '<p>Teď lekníny na stranách odpluly ke břehu, zvětšíly se mezery. Použijte <code>justify-content</code>. Tentokrát jsou mezi lekníny rovnoměrné rozestupy.</p>',
      ja:
        '<p>蓮の葉は両岸まで流されてしまいました。間隔はさらに開いています。<code>justify-content</code>を使いましょう。蓮の葉は等間隔に並んでいます。</p>',
      hu:
        '<p>Mostanra a tündérrózsák kisodródtak a tópart felé, megnövelve ezáltal a közöttük tátongó űrt. Használd a <code>justify-content</code> tulajdonságot. Ezúttal a tündérrózsák között egyenlő mértékű szabad terület van.</p>',
      eo:
        '<p>Nun, la flankaj akvolilifolioj flosas al la bordo, grandigante la spacon inter ili. Uzu <code>justify-content</code>. Ĉifoje, la akvolilifolioj havas saman spacon inter ili.</p>',
      sv:
        '<p>Nu har blombladen längs med kanterna drivit in till stranden och utökt utrymmet mellan dem. Använd <code>justify-content</code>. Denna gång är blombladen jämt fördelade.</p>',
      uk:
        '<p>Тепер крайні листя латаття віднесло до берегів, збільшуючи простір між ними. Використовуй <code>justify-content</code>. Цього разу поміж листками латаття рівні відстані.</p>',
      hi:
        '<p>अब लिली के पत्ते किनारों की तरफ चले गयें हैं। <code>justify-content</code>का इस्तेमाल कीजिये। इस समय लिली के पत्तों के मध्य बराबर जगह है।</p>',
      sr:
        '<p>Сада су крајњи локвањи померени према обали што увећава растојање између њих. Користи <code>justify-content</code>. Овог пута размак између локвања је идентичан.</p>',
      nl:
        '<p>De lelieblaadjes aan de rand zijn naar de oever van de vijver gedreven, waardoor de plaats tussen hun groter is geworden. Maak gebruik van <code>justify-content</code>. Deze keer is er een gelijke verdeling van plaats tussen hun.</p>',
      ta:
        '<p>இப்பொழுது இலைகள் தங்களுக்கு இடையில் அதிக இடைவெளி விட்டு குளத்தின் கரை ஒற்றி சென்றுவிட்டன. மீண்டும் code>justify-content</code> உபயோகித்து முயற்சிக்கவும்.<p>',
      ml:
        '<p>ഇപ്പോൾ ഞരമ്പുകളിലുള്ള താമരപ്പൂവും കടൽക്കരയിലേക്ക് നീങ്ങുന്നു, അവ തമ്മിൽ ഇടം വർദ്ധിപ്പിക്കുന്നു. <code>justify-content</code>. ഉപയോഗിച്ച്. താമര ഇലകൾക്ക് ഇടയിൽ ഒരേ ദൂരം ആണ് </p>',
      el:
        '<p>Τώρα τα νούφαρα στις άκρες έχουν παρασυρθεί στην ακτή, αυξάνοντας το διάστημα μεταξύ τους. Χρησιμοποιήστε το <code>justify-content</code>. Αυτή την φορά, τα νούφαρα έχουν ίσο διάστημα μεταξύ τους.</p>',
      mk:
        '<p>Сега листовите на рабовите се имаат придвижено кон брегот, зголемувајќи го просторот помеѓу нив. Користете <code>justify-content</code>. Овој пат, листовите имаат еднаков простор помеѓу нив.</p>',
      uz:
        "<p>Endi 2 ta likopni xontaxtaning chetlariga qo'yishibdi. <code>justify-content</code> xususiyatidan foydalanib somsalarni o'z joylariga qo'ying. Bu gal likoplarning atrofida teng masofa mavjud.</p>"
    },
    board: 'gyr',
    style: { 'justify-content': 'space-between' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'align-items 1',
    instructions: {
      en:
        '<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>',
      ro:
        '<p>Acum folosește <code>align-items</code> pentru a ajuta broaștele să ajungă la fundul lacului. Această proprietate CSS aliniază elementele vertical și acceptă următoarele valori:</p><ul><li><code>flex-start</code>: Elementele se aliniază în partea de sus a containerului.</li><li><code>flex-end</code>: Elementele se aliniază în partea de jos a containerului.</li><li><code>center</code>: Elementele se aliniază in centrul vertical al containerului.</li><li><code>baseline</code>: Elementele sunt afișate la linia de baza a containerului.</li><li><code>stretch</code>: Elementele sunt întinse să se potrivească în container.</li></ul>',
      bg:
        '<p>Сега използвай <code>align-items</code>, за да помогнеш на жабчетата да достигнат до долния край на езерото. Това CSS свойство подрежда елементите вертикално и приема следните стойности:</p><ul><li><code>flex-start</code>: Елементите се подреждат в горната част на контейнера.</li><li><code>flex-end</code>: Елементите се подреждат в долната част на контейнера.</li><li><code>center</code>: Елементите се подреждат във вертикалния център на контейнера.</li><li><code>baseline</code>: Елементите се подреждат на базовата линия на контейнера.</li><li><code>stretch</code>: Елементите се разпъват, за да паснат в контейнера.</li></ul>',
      de:
        '<p>Verwende nun <code>align-items</code>, um den Fr&ouml;schen zu helfen, das untere Ende des Teichs zu erreichen. Diese CSS-Eigenschaft richtet die Elemente vertikal aus und akzeptiert die folgenden Werte:</p><ul><li><code>flex-start</code>: Elemente oben am Container ausrichten.</li><li><code>flex-end</code>: Elemente unten am Container ausrichten.</li><li><code>center</code>: Elemente mittig im Container ausrichten.</li><li><code>baseline</code>: Elemente an der Grundlinie des Containers ausrichten.</li><li><code>stretch</code>: Elemente strecken, um den Container auszuf&uuml;llen.</li></ul>',
      'pt-br':
        '<p>Agora use <code>align-items</code> para levar os sapos ao fundo da lagoa. Essa propriedade CSS alinha os itens verticalmente e aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham na parte de cima do container.</li><li><code>flex-end</code>: Itens se alinham na parte de baixo do container.</li><li><code>center</code>: Itens se alinham no centro vertical do container.</li><li><code>baseline</code>: Items se alinham na linha da base do container.</li><li><code>stretch</code>: Itens se esticam para preencher o container.</li></ul>',
      es:
        '<p>Ahora usa <code>align-items</code> para ayudar a las ranas a llegar al fondo del estanque. Esta propiedad CSS alinea elementos verticalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos a la parte superior del contenedor.</li><li><code>flex-end</code>: Alinea elementos a la parte inferior del contenedor.</li><li><code>center</code>: Alinea elementos en el centro (verticalmente hablando) del contenedor.</li><li><code>baseline</code>: Muestra elementos en la línea base del contenedor</li><li><code>stretch</code>: Elementos se estiran para ajustarse al contenedor.</li></ul>',
      fr:
        "<p>Maintenant, utilisez <code>align-items</code> pour aider les grenouilles à se rendre au bas de l'étang. Cette propriété CSS aligne les éléments verticalement et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les éléments s'alignent au haut du conteneur.</li><li><code>flex-end</code>&nbsp;: Les éléments s'alignent au bas du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s'alignent au centre vertical du conteneur.</li><li><code>baseline</code>&nbsp;: Les éléments s'alignent à la ligne de base du conteneur.</li><li><code>stretch</code>&nbsp;: Les éléments sont étirés pour s'adapter au conteneur.</li></ul>",
      ru:
        '<p>Теперь используй <code>align-items</code> чтоб помочь лягушатам добратся к нижней части пруда. Это CSS свойство выравнивает элементы вертикально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по верхнему краю контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по нижнему краю контейнера.</li><li><code>center</code>: Элементы выравниваются вертикально по центру контейнера.</li><li><code>baseline</code>: Элементы отображаются на базовой линии контейнера.</li><li><code>stretch</code>: Элементы растягиваются, чтоб заполнить контейнер.</li></ul>',
      fa:
        '<p>در حال حاضر با استفاده از <code>align-items</code> به قورباغه ها کمک کنید تا به پایین برکه برسند.این خاصیت ایتم ها را در محور عمودی تراز بندی می کند و مقادیر آن عبارتند از :</p><ul><li><code>flex-start</code>: آیتم‌ها از نقطه ابتدایی محور عمودی چیده می‌شوند.</li><li><code>flex-end</code>: آیتم‌ها از نقطه انتهایی محور عمودی چیده می‌شوند.</li><li><code>center</code>: آیتم‌ها در وسط محور عمودی چیده می‌شوند.</li><li><code>baseline</code>: آیتم ها بر اساس <span class="en-font">Baseline</span>شان هم‌تراز می‌شوند</li><li><code>stretch</code>: در صورتی که ارتفاع آیتم‌ها مشخص نشده باشد، آیتم ها کشیده میشوند و Flex line را پر میکنند.</li></ul>',
      'zh-cn':
        '<p>现在用<code>align-items</code>来帮助青蛙们到池塘的底部。这个CSS属性纵向对齐元素并且可选以下几个值：</p><ul><li><code>flex-start</code>: 元素与容器的顶部对齐。</li><li><code>flex-end</code>: 元素与容器的底部对齐。</li><li><code>center</code>: 元素纵向居中。</li><li><code>baseline</code>: 元素在容器的基线位置显示。</li><li><code>stretch</code>: 元素被拉伸以填满整个容器。</li></ul>',
      'zh-tw':
        '<p>現在用<code>align-items</code>來幫助青蛙們到池塘的底部。這個CSS屬性縱向對齊元素並且可選以下幾個值：</p><ul><li><code>flex-start</code>: 元素與容器的頂部對齊。</li><li><code>flex-end</code>: 元素與容器的底部對齊。</li><li><code>center</code>: 元素縱向居中。</li><li><code>baseline</code>: 元素在容器的基線位置顯示。</li><li><code>stretch</code>: 元素被拉伸以填滿整個容器。</li></ul>',
      tr:
        "<p>Şimdi, <code>align-items</code> kuralını kullanarak kurbağaların gölün aşağısına gitmesine yardımcı olun. Bu CSS kuralı öğeleri dikey olarak hizalar ve şu değerleri alır:</p><ul><li><code>flex-start</code>: Öğeleri flexbox container'ın tepesine hizalar</li><li><code>flex-end</code>: Öğeleri flexbox container'ın aşağısına hizalar</li><li><code>center</code>: Öğeleri flexbox container'ın dikey ortasına hizalar</li><li><code>baseline</code>: Öğeleri flexbox container'ın yazı referans çizgisine(baseline) hizalar</li><li><code>stretch</code>: Öğeler flexbox container boyunca uzarlar</li></ul>",
      it:
        "<p>Adesso usa <code>align-items</code> per aiutare le rane ad arrivare alla fine dello stagno. Questa proprieta' CSS allinea gli elementi verticalmente ed accetta i seguenti valori:</p><ul><li><code>flex-start</code>: Allinea gli elementi all'inizio del loro contenitore.</li><li><code>flex-end</code>: Allinea gli elementi alla fine del loro contenitore.</li><li><code>center</code>: Centra gli elementi verticalmente.</li><li><code>baseline</code>: Gli elementi sono allineati in modo tale che le loro baselines siano allineate.</li><li><code>stretch</code>: Gli elementi sono allungati per occupare tutto il contenitore.</li></ul>",
      ko:
        '<p>이제 <code>align-items</code>를 사용하여 개구리들이 연못의 아래쪽에 도착할 수 있도록 도와주세요. 이 CSS 속성은 다음의 값들을 인자로 받아 요소들을 세로선 상에서 정렬합니다:</p><ul><li><code>flex-start</code>: 요소들을 컨테이너의 꼭대기로 정렬합니다.</li><li><code>flex-end</code>: 요소들을 컨테이너의 바닥으로 정렬합니다.</li><li><code>center</code>: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.</li><li><code>baseline</code>: 요소들을 컨테이너의 시작 위치에 정렬합니다.</li><li><code>stretch</code>: 요소들을 컨테이너에 맞도록 늘립니다.</li></ul>',
      lt:
        '<p>Dabar panaudokite <code>align-items</code>, kad padėtumėte varlytėms nusigauti į tvenkinio apačią. Ši CSS komanda lygiuoja elementus vertikaliai ir reguoja į šias vertes:</p><ul><li><code>flex-start</code>: Elementai lygiuojami supančio elemento viršuje.</li><li><code>flex-end</code>: Elementai lygiuojami supančio elemento apačioje.</li><li><code>center</code>: Elementai lygiuojami vertikaliai supančio elemento viduryje.</li><li><code>baseline</code>: Elementai atvaizduojami palei apatinę supančio elemento liniją.</li><li><code>stretch</code>: Elementai yra ištempiami, kad užpildytų supantį elementą.</li></ul>',
      vi:
        '<p>Bây giờ sử dụng <code>align-items</code> để giúp những chú ếch đến đáy của ao. Từ thuộc tính CSS này sắp xếp những hạng mục theo chiều dọc và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp phía trên của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp phía dưới cùng của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>baseline</code>: Các hạng mục sẽ được hiển thị ở đường cơ bản của hộp chứa.</li><li><code>stretch</code>: Các hạng mục sẽ được kéo dài để phù hợp với hộp chứa.</li></ul>',
      pl:
        '<p>A teraz przy pomocy <code>align-items</code> zaprowadź żabki na spód stawu. Ta właściwość CSS wyrównuje elementy w pionie i przyjmuje wartości:</p><ul><li><code>flex-start</code>: Elementy wyrównują się górnej krawędzi kontenera.</li><li><code>flex-end</code>: Elementy wyrównują się do dolnej krawędzi kontenera.</li><li><code>center</code>: Elementy zostaną wyśrodkowane w pionie.</li><li><code>baseline</code>: Elementy zostaną wyświetlone na lini odniesienia kontenera.</li><li><code>stretch</code>: Elementy zostaną powiększone tak, aby wypelnić kontener.</li></ul>',
      cs:
        '<p>Použijte <code>align-items</code> tak, aby se žabky dostaly na spodní stranu rybníka. Tato CSS vlastnost zarovnává prvky svisle a nabývá hodnot:</p><ul><li><code>flex-start</code>: Zarovná prvky nahoru.</li><li><code>flex-end</code>: Zarovná prvky dolů.</li><li><code>center</code>: Zarovná prvky na střed kontejneru.</li><li><code>baseline</code>: Zarovná prvky na účaří.</li><li><code>stretch</code>: Roztáhne prvky tak, aby vyplnily kontejner.</li></ul>',
      ja:
        '<p>今度は<code>align-items</code>を使って池の下のほうへカエルを連れていきましょう。このCSSプロパティーはアイテムを垂直に並べ、以下の値をとります。</p><ul><li><code>flex-start</code>: アイテムはコンテナーの上部に並びます。</li><li><code>flex-end</code>: アイテムはコンテナーの下部に並びます。</li><li><code>center</code>: アイテムはコンテナーの垂直方向中央に並びます。</li><li><code>baseline</code>: アイテムはコンテナーのベースラインに表示されます。</li><li><code>stretch</code>: アイテムはコンテナーの大きさに合うよう広がります。</li></ul>',
      hu:
        '<p>Most használd az <code>align-items</code> tulajdonságot, ezzel hozzásegítve a békákat ahhoz, hogy a tavacska aljához jussanak. Ez a CSS tulajdonság az elemeket függőlegesen igazítja és a következő értékeket kaphatja: </p><ul><li><code>flex-start</code>: Az elemek a konténer tetejére igazodnak.</li><li><code>flex-end</code>: Az elemek a konténer aljára igazodnak.</li><li><code>center</code>: Az elemek a konténeren belül függőlegesen középre igazodnak.</li><li><code>baseline</code>: Az elemek a konténerben a szöveg alapvonalához igazodnak.</li><li><code>stretch</code>: Az elemek széthúzódnak, kifeszülnek, hogy kitöltsék a konténert.</li></ul>',
      eo:
        '<p>Nun uzu <code>align-items</code> por helpi la ranojn iri al la fundo de la lageto. Ĉi tiu CSS-a trajto vertikale vicigas elementojn kaj akceptas la sekvajn valorojn:</p><ul><li><code>flex-start</code>: Elementoj linias supren de la ujo.</li><li><code>flex-end</code>: Elementoj linias malsupren de la ujo.</li><li><code>center</code>: Elementoj linias je la vertikala centro de la ujo.</li><li><code>baseline</code>: Elementoj afiŝas je la bazlinio de la ujo.</li><li><code>stretch</code>: Elementoj streĉiĝas por ke ili laŭmezure kovru la ujon.</li></ul>',
      sv:
        '<p>Använd <code>align-items</code> för att hjälpa grodorna att ta sig längst ner i dammen. Denna attributen justerar dem vertikalt och accepterar följande värden:</p><ul><li><code>flex-start</code>: Objekt justeras till toppen av containern.</li><li><code>flex-end</code>: Objekt justeras till botten av containern.</li><li><code>center</code>: Objekt justeras till mitten av containern vertikalt.</li><li><code>baseline</code>: Objekt justeras till baslinjen i containern</li><li><code>stretch</code>: Objekt sträcks ut för att fylla containern.</li></ul>',
      uk:
        '<p>Скористайся <code>align-items</code> для допомоги жабенятам дістатися до нижньої частини ставка. Ця CSS властивість вирівнює елементи вертикально і може набувати таких значень:</p><ul><li><code>flex-start</code>: елементи вирівнюються за верхнім краєм контейнеру.</li><li><code>flex-end</code>: елементи вирівнюються за нижнім краєм контейнеру.</li><li><code>center</code>: елементи вирівнюються вертикально по середині контейнера.</li><li><code>baseline</code>: елементи буде розміщено на базовій лінії контейнера.</li><li><code>stretch</code>: елементи розтягуються заповнюючи контейнер.</li></ul>',
      hi:
        '<p>अब <code>align-items</code> की मदद से मेंढकों को तालाब की तलहटी तक पहुंचाइये। यह CSS प्रॉपर्टी वस्तुओं को लम्बाई में संरेखित करती है एवं निम्न मूल्यों का उपयोग करती है:</p><ul><li><code>flex-start</code>: यह वस्तुओं को कंटेनर के उपर संरेखित करता है।</li><li><code>flex-end</code>: यह वस्तुओं को कंटेनर के अंत में संरेखित करता है।</li><li><code>center</code>: यह वस्तुओं को कंटेनर की खड़ी केंद्र में संरेखित करता है।</li><li><code>baseline</code>: यह वस्तुओं को कंटेनर की आधार रेखा पर प्रदर्शित करता है।</li><li><code>stretch</code>: यह वस्तुओं को कंटेनर में फिट करने के लिए फैला देता है।</li></ul>',
      sr:
        '<p>Сада користи <code>align-items</code> да помогнеш жабицама да дођу до дна барице. Ово CSS својство поравњава елементе вертикално и прихвата следеће вредности:</p><ul><li><code>flex-start</code>: Поравњава елементе у горњи део контејнера.</li><li><code>flex-end</code>: Поравњава елементе у доњи део контејнера.</li><li><code>center</code>: Поравњава елементе у вертикални центар контејнера.</li><li><code>baseline</code>: Елементи су приказани у линији са baseline (линијом текста) контејнера.</li><li><code>stretch</code>: Елементи су развучени да попуне контејнер.</li></ul>',
      nl:
        '<p>Maak nu gebruik van <code>align-items</code> om de kikkers naar de onderkant van de vijver te helpen. Deze CSS eigenschap lijnt elementen verticaal uit, en aanvaard de volgende waarden:</p><ul><li><code>flex-start</code>: Elementen worden uitgelijnd naar de bovenkant van de container.</li><li><code>flex-end</code>: Elementen worden uitgelijnd naar de onderkant van de container.</li><li><code>center</code>: Elementen worden uitgelijnd op het verticaal middelpunt van de container.</li><li><code>baseline</code>: Elementen worden uitgelijnd op de basislijn van de container.</li><li><code>stretch</code>: Elementen worden uitgerokken om binnen de container te passen.</li></ul>',
      ta:
        '<p>இப்பொழுது <code>align-items</code> உபயோகித்து, தவளைகள் குளத்தின் கீழ் பகுதிக்கு செல்ல உதவி செய்யவும்.  இந்த CSS property செங்குத்தாக பொருட்களை உபகரணங்களை சீரமைக்கும் மற்றும் பின்வரும் மதிப்புகளை ஏற்றுக்கொள்கிறது:</p><ul><li><code>flex-start</code>: Items மேற்புறமாக சீரமைக்கப்படும்.</li><li><code>flex-end</code>: Items கீழ்புறமாக சீரமைக்கப்படும்.</li><li><code>center</code>: Items செங்குத்து மத்தியத்தில்  சீரமைக்கப்படும்.</li><li><code>baseline</code>: Items, baseline பகுதியில் சீரமைக்கப்படும்.</li><li><code>stretch</code>: Items, container-ல் பொருந்தும் வண்ணம் நீட்டி சீரமைக்கப்படும்.</li></ul>',
      ml:
        '<p><code>align-items</code> ഉപയോഗിച്ച് തവളകളെ തടാകത്തിന്റെ താഴേക്കു എത്തിക്കുക. ഈ CSS വസ്തു ലംബമായി ഇനങ്ങളെ വിന്യസിക്കുന്നു </p><ul><li><code>flex-start</code>: ഇനങ്ങൾ കണ്ടെയ്നർ മുകളിൽ വയ്ക്കുക.</li><li><code>flex-end</code>: ഇനങ്ങൾ കണ്ടെയ്നറിന് താഴെയായി വിന്യസിക്കുക.</li><li><code>center</code>: ഇനങ്ങൾ കണ്ടെയ്നറിന്റെ ലംബമായ കേന്ദ്രത്തിൽ വിന്യസിക്കുക.</li><li><code>baseline</code>: കണ്ടെയ്നറിന്റെ അടിസ്ഥാനത്തിൽ ഇനങ്ങൾ പ്രദർശിപ്പിക്കും.</li><li><code>stretch</code>: ഇനങ്ങൾ കണ്ടെയ്നറിൽ വയ്ക്കാൻ ഇട്ടു.</li></ul>',
      el:
        '<p>Τώρα χρησιμοποιήστε το <code>align-items</code> για να βοηθήσετε τους βατράχους να φτάσουν στο κάτω μέρος της λιμνούλας. Αυτή η ιδιότητα CSS ευθυγραμμίζει αντικείμενα στον κάθετο άξονα και αποδέχεται τις εξής αξίες:</p><ul><li><code>flex-start</code>: Τα αντικείμενα ευθυγραμμίζονται στο πάνω μέρος του container.</li><li><code>flex-end</code>: Τα αντικείμενα ευθυγραμμίζονται στο κάτω μέρος του container.</li><li><code>center</code>: Τα αντικείμενα ευθυγραμμίζονται στο κάθετο κέντρο του container.</li><li><code>baseline</code>: Τα αντικείμενα εμφανίζονται στην βασική γραμμή του container.</li><li><code>stretch</code>: Τα αντικείμενα τεντώνονται για να ταιριάξουν στο container.</li></ul>',
      mk:
        '<p>Сега користете <code>align-items</code> да им помогнете на жабите да стигнат до дното на езерцето. Ова CSS својство ги подредува елементите вертикално и ги прима следните вредности:</p><ul><li><code>flex-start</code>: Елементите се подредуваат по горниот крај на контејнерот.</li><li><code>flex-end</code>: Елементите се подредуваат по долниот крај на контејнерот.</li><li><code>center</code>: Елементите се подредуваат по вертикалниот центар на контејнерот.</li><li><code>baseline</code>: Елементите се подредуваат по основната линија на контејнерот.</li><li><code>stretch</code>: Елементите се истегнати за да го пополнат контејнерот.</li></ul>',
      uz:
        "<p>Endi somsalarni xontaxtaning pastiga qo'yish uchun <code>align-items</code> xusisiyatidan foydalaning. Bu CSS xususiyat tik o'q (tepadan pastga) bo'yicha buyumlarni saflaydi va quyidagi qiymatlarning biriga ega bo'ladi:</p><ul><li><code>flex-start</code> – idishning tepasida buyumlarni saflash.</li><li><code>flex-end</code> – idishning pastida buyumlarni saflash.</li><li><code>center</code> – idishning tik o'qining markazida buyumlarni saflash.</li><li><code>baseline</code> – idishning matn osti chiziqida buyumlarni saflash.</li><li><code>stretch</code> – buyumlarni tik o'q bo'yicha cho'zib saflash.</li></ul>"
    },
    board: 'gyr',
    style: { 'align-items': 'flex-end' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'align-items 2',
    instructions: {
      en:
        '<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      ro:
        '<p>Îndrumă broasca către centrul lacului folosind o combinație de <code>justify-content</code> și <code>align-items</code>.</p>',
      bg:
        '<p>Заведи жабчето до центъра на езерото, използвайки комбинация от <code>justify-content</code> и <code>align-items</code>.</p>',
      de:
        '<p>F&uuml;hre den Frosch zur Mitte des Teichs, indem du <code>justify-content</code> und <code>align-items</code> in kombinierst.</p>',
      'pt-br':
        '<p>Leve o sapo ao cento da lagoa usando uma combinação de <code>justify-content</code> e <code>align-items</code>.</p>',
      es:
        '<p>Mueve la rana al centro del estanque, usando una combinación de <code>justify-content</code> y <code>align-items</code>.</p>',
      fr:
        "<p>Dirigez la grenouille au centre de l'étang en utilisant une combinaison de <code>justify-content</code> et <code>align-items</code>.</p>",
      ru:
        '<p>Направь лягушонка в центр пруда, используя <code>justify-content</code> и <code>align-items</code> вместе.</p>',
      fa:
        '<p>قورباغه را به وسط برکه هدایت کنید برای این کار از ترکیب خاصیت های <code>justify-content</code> و <code>align-items</code> استفاده کنید.</p>',
      'zh-cn':
        '<p>使用<code>justify-content</code>和<code>align-items</code>的组合来指引青蛙们到池塘中央。</p>',
      'zh-tw':
        '<p>使用<code>justify-content</code>和<code>align-items</code>的組合來指引青蛙們到池塘中央。</p>',
      tr:
        '<p>Kurbağayı <code>justify-content</code> ve <code>align-items</code> kurallarını kullanarak gölün ortasına yönlendirin.</p>',
      it:
        '<p>Dirigi la rana al centro dello stagno usando entrambe <code>justify-content</code> e <code>align-items</code>.</p>',
      ko:
        '<p><code>justify-content</code>와 <code>align-items</code>를 함께 사용하여 개구리가 연못의 중앙으로 이동할 수 있도록 도와주세요.</p>',
      lt:
        '<p>Padėkite varlytei nusigauti į vidurį tvenkinio naudodami <code>justify-content</code> ir <code>align-items</code> kombinaciją.</p>',
      vi:
        '<p>Dẫn chú ếch đến trung tâm của ao bằng cách kết hợp <code>justify-content</code> và <code>align-items</code>.</p>',
      pl:
        '<p>Zaprowadź żabkę na środek stawu przy pomocy <code>justify-content</code> i <code>align-items</code>.</p>',
      cs:
        '<p>Dostaňte žabku doprostřed rybníka kombinací <code>justify-content</code> a <code>align-items</code>.</p>',
      ja:
        '<code>justify-content</code>と<code>align-items</code>の組み合わせを使って、カエルを池の中央へ連れていきましょう。',
      hu:
        '<p>Vezesd a békát a tavacska közepére, kombináld a <code>justify-content</code> és az <code>align-items</code> tulajdonságokat.</p>',
      eo:
        '<p>Konduku la ranon al la centro de la lageto uzante kombinon de <code>justify-content</code> kaj <code>align-items</code>.</p>',
      sv:
        '<p>Hjälp grodan till mitten genom att använda en kombination av <code>justify-content</code> och <code>align-items</code>.</p>',
      uk:
        '<p>Скеруй жабеня до центру ставка, використовуючи разом <code>justify-content</code> та <code>align-items</code>.</p>',
      hi:
        '<p><code>justify-content</code> एवं <code>align-items</code> का प्रयोग करते हुए मेंढक को तालाब के केंद्र तक पहुंचाइये।</p>',
      sr:
        '<p>Доведи жабицу у центар барице комбинујући <code>justify-content</code> и <code>align-items</code>.</p>',
      nl:
        '<p>Leidt de kikkers naar het midden van de vijver via een combinatie van <code>justify-content</code> en <code>align-items</code>.</p>',
      ta:
        '<p><code>justify-content</code> மற்றும் <code>align-items</code> பயன்படுத்தி குளத்தின் மையத்தில் தவளை செல்ல வழி காட்டவும். <p>',
      ml:
        '<p><code>justify-content</code> and <code>align-items</code> ഉപയോഗിച്ച് കുളത്തിന്റെ നടുവിലേക്ക് തവളയെ നയിക്കുക.</p>',
      el:
        '<p>Οδηγήστε τον βάτραχο στο κέντρο της λιμνούλας χρησιμοποιώντας έναν συνδυασμό του <code>justify-content</code> και του <code>align-items</code>.</p>',
      mk:
        '<p>Доведете ја жабата до центарот на езерцето користејќи комбинација од <code>justify-content</code> и <code>align-items</code>.</p>',
      uz:
        "<p><code>justify-content</code> va <code>align-items</code> birikmasidan foydalanib somsani xontaxtaning o'rtasiga joylang.</p>"
    },
    board: 'g',
    style: { 'justify-content': 'center', 'align-items': 'center' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'align-items 3',
    instructions: {
      en:
        '<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      ro:
        '<p>Broaștele trebuie să treacă lacul din nou, de această dată unii nuferi au mult spațiu în jurul lor. Folosește o combinație de <code>justify-content</code> și <code>align-items</code>.</p>',
      bg:
        '<p>Жабчетата трябва да преминат през езерото отново, този път до листа с доста разстояние около себе си. Използвай комбинация от <code>justify-content</code> и <code>align-items</code>.</p>',
      de:
        '<p>Die Fr&ouml;sche m&uuml;ssen den Teich erneut &uuml;berqueren. Dieses Mal haben die Seerosenbl&auml;tter eine ganze Menge Abstand zueinander. Kombiniere <code>justify-content</code> und <code>align-items</code>.</p>',
      'pt-br':
        '<p>Os sapos precisam atravessar a lagoa de novo, desta vez para algumas vitórias-régias com bastante espaço em torno delas. Use uma combinação de <code>justify-content</code> e <code>align-items</code>.</p>',
      es:
        '<p>Nuevamente, las ranas necesitan cruzar el estanque. En esta oportunidad, las hojas de lirio tienen mucho espacio alrededor de ellas. Debes usar una combinación de <code>justify-content</code> y <code>align-items</code>.</p>',
      fr:
        "<p>Les grenouilles doivent encore traverser l'étang. Cette fois-ci, les nénuphars ont beaucoup d'espace autour d'eux. Utilisez une combinaison de <code>justify-content</code> et <code>align-items</code>.</p>",
      ru:
        '<p>Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию <code>justify-content</code> и <code>align-items</code>.</p>',
      fa:
        '<p>قروباغه ها نیاز دارند که به انتهای برکه برسند, دقت داشته باشید که فضای خالی اطراف نیلوفر های آبی وجود دارد. برای این کار از خاصیت های <code>justify-content</code> و <code>align-items</code> استفاده کنید.</p>',
      'zh-cn':
        '<p>这些青蛙又需要穿过池塘了。这次有些荷叶周围有充足的距离。用<code>justify-content</code>和<code>align-items</code>的组合。</p>',
      'zh-tw':
        '<p>這些青蛙又需要穿過池塘了。這次有些荷葉周圍有充足的距離。用<code>justify-content</code>和<code>align-items</code>的組合。</p>',
      tr:
        '<p>Kurbağaların, bu serfer etraflarında bolca boş alan olan nilüfer yapraklarına ulaşmaları için tekrar gölü geçmeleri gerekiyor. <code>justify-content</code> ve <code>align-items</code> kombinasyonunu kullanın.</p>',
      it:
        '<p>Le rane devono di nuovo attraversare lo stagno. Questa volta le ninfee hanno parecchio spazio attorno ad esse. Usa entrambe <code>justify-content</code> e <code>align-items</code>.</p>',
      ko:
        '<p>개구리들이 연못을 다시 건너려고 하는데, 수련잎 주위에 간격이 있습니다. <code>justify-content</code>와 <code>align-items</code>를 함께 사용하세요.</p>',
      lt:
        '<p>Varlytėms vėl reikia persikelti į kitą tvenkinio vietą, šį kartą ant lelijos lapų, aplink kuriuos yra pakankamai vietos. Naudokite <code>justify-content</code> ir <code>align-items</code> kombinaciją.</p>',
      vi:
        '<p>Những chú ếch cần phải qua ao một lần nữa, lần này các lá bông súng có nhiều không gian xung quanh chúng. Kết hợp <code>justify-content</code> và <code>align-items</code>.</p>',
      pl:
        '<p>Żabki znowu muszą przejść na drugą stronę stawu. Tym razem muszą znaleźć się na listkach, które mają dużo miejca wokół siebie. Skorzystaj z kombinacji <code>justify-content</code> i <code>align-items</code>.</p>',
      cs:
        '<p>Žabky znovu potřebují na spodek rybníka, teď jsou však mezi lekníny velké mezery. Použijte kombinaci vlastností <code>justify-content</code> a <code>align-items</code>.</p>',
      ja:
        '<p>再びカエルが池を渡ろうとしています。今度の蓮の葉はずいぶん間隔が空いているようですね。<code>justify-content</code>と<code>align-items</code>の組み合わせを使いましょう。</p>',
      hu:
        '<p>A békáknak ismét át kell szelniük a tavat, ezúttal néhány tündérrózsáért, melyek között meglehetősen sok az üres tér. Használd a <code>justify-content</code> és az <code>align-items</code> kombinációját.</p>',
      eo:
        '<p>La ranoj bezonas de nove transiri la lageton, ĉifoje por atingi nimfeofoliojn kun sufiĉe da spaco ĉirkaŭ ili. Uzante kombinon de <code>justify-content</code> kaj <code>align-items</code>.</p>',
      sv:
        '<p>Grodorna behöver korsa dammen igen och denna gång är blombladen långt ifrån varandra. Använd en kombination av <code>justify-content</code> och <code>align-items</code>.</p>',
      uk:
        '<p>Жабенята знову мають перетнути ставок, цього разу навколо листя латаття є чималий простір. Поєднай разом <code>justify-content</code> та <code>align-items</code>, щоб досягти результату.</p>',
      hi:
        '<p>मेंढकों को पुनः तालाब पार करना है, इस समय लिली के पत्तों के मध्य काफी जगह मोजूद है। <code>justify-content</code> एवं <code>align-items</code> का प्रयोग कीजिये।</p>',
      sr:
        '<p>Жабице опет треба да пређу барицу, овог пута до локвања око којих има много простора. Комбинуј <code>justify-content</code> и <code>align-items</code>.</p>',
      nl:
        '<p>De kikkers moeten de vijver weer oversteken, deze keer is er veel plek rond hun lelieblaadjes. Maak gebruik van een combinatie van <code>justify-content</code> en <code>align-items</code>.</p>',
      ta:
        '<p>தவளைகள் மீண்டும் குளம் கடக்க வேண்டும், இம்முறை இலைகளை சுற்றி நிறைய வெற்றிடம் உள்ளது. <code>justify-content</code> மற்றும் <code>align-items</code> பயன்படுத்தி  தவளைகளுக்கு  வழி காட்டவும். <p>',
      ml:
        '<p><code>justify-content</code> and <code>align-items</code> ഉപയോഗിച്ച്  തവളകൾ വീണ്ടും കുളത്തിനടുത്ത് വേണം, ഈ സമയം ചില താമരപ്പൂക്കൾ അവർക്ക് ചുറ്റും ധാരാളം സ്ഥലങ്ങളുണ്ട്.</p>',
      el:
        '<p>Οι βάτραχοι χρειάζεται να διασχίσουν ξανά την λιμνούλα, αυτή την φορά για να φτάσουν σε μερικά νούφαρα με άπλετο διάστημα τριγύρω τους. Χρησιμοποιήστε έναν συνδυασμό του <code>justify-content</code> και του <code>align-items</code>.</p>',
      mk:
        '<p>Жабите треба да го поминат езерцето повторно, овој пат до листови со многу простор околу нив. Користејќи комбинација од <code>justify-content</code> и <code>align-items</code>.</p>',
      uz:
        '<p>Somsalarni yana xontaxtaning narigi tarafiga joylash kerak. Endi likoplarning orasida joy yetarli. <code>justify-content</code> va <code>align-items</code> birikmasidan foydalaning.</p>'
    },
    board: 'gyr',
    style: { 'justify-content': 'space-around', 'align-items': 'flex-end' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'flex-direction 1',
    instructions: {
      en:
        '<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      ro:
        '<p>Broaștele trebuie să ajungă în aceeași ordine ca nuferii folosind <code>flex-direction</code>. Această proprietate CSS definește direcția în care sunt așezate elementele în container și acceptă următoarele valori:</p><ul><li><code>row</code>: Elementele sunt așezate la fel ca direcția textului.</li><li><code>row-reverse</code>: Elementele sunt așezate opus față de direcția textului.</li><li><code>column</code>: Elementele sunt așezate de sus în jos.</li><li><code>column-reverse</code>: Elementele sunt așezate de jos în sus.</li></ul>',
      bg:
        '<p>Жабчетата трябва да се подредят по същия начин както техните листа, използвайки <code>flex-direction</code>. Това CSS свойство определя посоката, в която са разположени елементите в контейнера и приема следните стойности: </p><ul><li><code>row</code>: Елементите са разположени по посока на текста.</li><li><code>row-reverse</code>: Елементите са разположени обратно на посоката на текста.</li><li><code>column</code>: Елементите са разположени от горе надолу.</li><li><code>column-reverse</code>: Елементите са разположени от долу нагоре.</li></ul>',
      de:
        '<p>Die Fr&ouml;sche m&uuml;ssen mit Hilfe von <code>flex-direction</code> in die Reihenfolge der Seerosenbl&auml;tter gebracht werden. Diese CSS-Eigenschaft legt die Ausrichtung der Elemente in einem Container fest, und akzeptiert die folgenden Werte:</p><ul><li><code>row</code>: Elemente in Textrichtung ausrichten.</li><li><code>row-reverse</code>: Elemente entgegen der Textrichtung ausrichten.</li><li><code>column</code>: Elemente von oben nach unten ausrichten.</li><li><code>column-reverse</code>: Elemente von unten nach oben ausrichten.</li></ul>',
      'pt-br':
        '<p>Os sapos precisam ficar na mesma ordem das vitórias-régias usando <code>flex-direction</code>. Esta propriedade CSS define a direção em que os itens são posicionados no container e aceita os seguintes valores:</p><ul><li><code>row</code>: Itens são posicionados na mesma direção do texto.</li><li><code>row-reverse</code>: Itens são posicionados na direção oposta à do texto.</li><li><code>column</code>: Itens são posicionados de cima para baixo.</li><li><code>column-reverse</code>: Itens são posicionados de baixo para cima.</li></ul>',
      es:
        '<p>Las ranas necesitan ponerse en el mismo orden que sus hojas de lirio usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>',
      fr:
        '<p>Les grenouilles doivent se rendre dans le même ordre que leurs nénuphars en utilisant <code>flex-direction</code>. Cette propriété CSS définit la direction dans laquelle les éléments sont placés dans le conteneur, et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>row</code>&nbsp;: Les éléments sont disposés dans la même direction que le texte.</li><li><code>row-reverse</code>&nbsp;: Les éléments sont disposés dans la direction opposée au texte.</li><li><code>column</code>&nbsp;: Les éléments sont disposés de haut en bas.</li><li><code>column-reverse</code>&nbsp;: Les éléments sont disposés de bas en haut.</li></ul>',
      ru:
        '<p>Лягушатам нужно выстроиться в порядке их лилий, используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>',
      fa:
        '<p>قورباغه ها نیاز دارند که روی نیلوفرهای آبی خود قرار بگیرند پس با استفاده از <code>flex-direction</code> این کار را انجام دهید. این خاصیت جهت ایتم ها را تعیین می کند و مقادیر زیر را می پذیرد:</p><ul><li><code>row</code>: این مقدار برای چیدمان افقی آیتم ها به کار میرود.</li><li><code>row-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li><li><code>column</code>: این مقدار برای چیدمان عمودی آیتم ها به کار میرود.</li><li><code>column-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li></ul>',
      'zh-cn':
        '<p>青蛙们需要和他们的荷叶保持对应的顺序。我们可以用<code>flex-direction</code>属性。这个CSS属性定义了元素在容器里摆放的方向，并且接受这些值：</p><ul><li><code>row</code>: 元素摆放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素摆放的方向和文字方向相反。</li><li><code>column</code>: 元素从上放到下。</li><li><code>column-reverse</code>: 元素从下放到上。</li></ul>',
      'zh-tw':
        '<p>青蛙們需要和他們的荷葉保持對應的順序。我們可以用<code>flex-direction</code>屬性。這個CSS屬性定義了元素在容器裏擺放的方向，並且接受這些值：</p><ul><li><code>row</code>: 元素擺放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素擺放的方向和文字的方向相反。</li><li><code>column</code>: 元素從上放到下。</li><li><code>column-reverse</code>: 元素從下放到上。</li></ul>',
      tr:
        '<p>Kurbağalar, kendi nilüfer yaprakları ile aynı sırada olmalılar. <code>flex-direction</code> kuralını kullanın. Bu CSS kuralı öğelerin hangi yönde yerleştireleceğini belirler ve şu değerleri alır:</p><ul><li><code>row</code>: Öğeler yazı yönü ile aynı yönde yerleştirilir.</li><li><code>row-reverse</code>: Öğeler yazı yönünün tersi yönünde yerleştirilir.</li><li><code>column</code>: Öğeler yukarıdan aşağıya doğru yerleştirilir.</li><li><code>column-reverse</code>: Öğeler aşağıdan yukarıya doğru yerleştirilir.</li></ul>',
      it:
        "<p>Le rane devo posizionarsi nello stesso ordine delle ninfee usando la proprieta' <code>flex-direction</code>. Questa proprieta' definisce la direzione in cui gli elementi verranno posizionati nel contenitore e accetta i seguenti valori:</p><ul><li><code>row</code>: Gli elementi sono posizionati nella stessa direzione del testo.</li><li><code>row-reverse</code>: Gli elementi sono posizionati nella direzione opposta al testo.</li><li><code>column</code>: Gli elementi sono posizionati dall'alto verso il basso.</li><li><code>column-reverse</code>: Gli elementi sono posizionati dal basso verso l'alto.</li></ul>",
      ko:
        '<p>개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. 이번에는 <code>flex-direction</code>을 사용하세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다:</p><ul><li><code>row</code>: 요소들을 텍스트의 방향과 동일하게 정렬합니다.</li><li><code>row-reverse</code>: 요소들을 텍스트의 반대 방향으로 정렬합니다.</li><li><code>column</code>: 요소들을 위에서 아래로 정렬합니다.</li><li><code>column-reverse</code>: 요소들을 아래에서 위로 정렬합니다.</li></ul>',
      lt:
        '<p>Varlytėms, naudojant <code>flex-direction</code>, reikia išsirikiuoti lygiai taip, kaip išrikiuoti jų lelijos lapai. Ši CSS komanda nusako kryptį, pagal kurią elementai yra sudėliojami supančio elemento viduje ir reaguoja į šias vertes:</p><ul><li><code>row</code>: Elementai yra rikiuojami teksto skaitymo kryptimi.</li><li><code>row-reverse</code>: Elementai yra rikiuojami atvirkščiai teksto skaitymo krypties.</li><li><code>column</code>: Elementai yra rikiuojami iš viršaus į apačią.</li><li><code>column-reverse</code>: Elementai yra rikiuojami iš apačios į viršų.</li></ul>',
      vi:
        '<p>Những chú ếch cần phải đến với các lá bông súng cùng màu của chúng bằng cách sử dụng <code>flex-direction</code>. Từ thuộc tính CSS này xác định hướng hạng mục được đặt trong hộp chứa, và chấp nhận các giá trị sau:</p><ul><li><code>row</code>: Các hạng mục được đặt cùng hướng với hướng của từ trong văn bản.</li><li><code>row-reverse</code>: Các hạng mục được đặt ngược hướng với hướng của từ trong văn bản.</li><li><code>column</code>: Các hạng mục được đặt từ trên xuống dưới.</li><li><code>column-reverse</code>: Các hạng mục được đặt từ dưới lên trên.</li></ul>',
      pl:
        '<p>Żabki muszą znaleźć się w tej samej kolejności co ich listki, pomoże im w tym właściwość <code>flex-direction</code>. Określa ona kierunek w jakim elementy są rozmieszczone w kontenerze i przyjmuje wartości:</p><ul><li><code>row</code>: Elementy zostaną rozmieszczone tak jak tekst.</li><li><code>row-reverse</code>: Elementy zostaną rozmieszczone odwrotnie do kierunku tekstu.</li><li><code>column</code>: Elementy zostaną rozmieszczone od góry do dołu.</li><li><code>column-reverse</code>: Elementy zostaną rozmieszczone od dołu do góry.</li></ul>',
      cs:
        '<p>Žabky se potřebují dostat na lekníny své barvy, pomůže jim vlastnost <code>flex-direction</code>. Tato vlastnost určuje směr, kterým jsou prvky rozmístěny v kontejneru, a akceptuje následující hodnoty:</p><ul><li><code>row</code>: Řádky ve směru textu.</li><li><code>row-reverse</code>: Řádky proti směru textu.</li><li><code>column</code>: Sloupce shora dolů.</li><li><code>column-reverse</code>: Sloupce zdola nahoru.</li></ul>',
      ja:
        '<p><code>flex-direction</code>を使って、カエルたちをそれぞれの蓮の葉に乗せましょう。このCSSプロパティーはコンテナー内でアイテムが配置される方向を決定します。また以下の値を取ります。</p><ul><li><code>row</code>: アイテムは文章と同じ方向に配置されます。</li><li><code>row-reverse</code>: アイテムは文章と逆の方向に配置されます。</li><li><code>column</code>: アイテムは上から下に向かって配置されます。</li><li><code>column-reverse</code>: アイテムは下から上に向かって配置されます。</li></ul>',
      hu:
        '<p>A békáknak ugyanolyan sorrendbe kell rendeződniük, mint a tündérrózsáik, méghozzá a <code>flex-direction</code> tulajdonság használatával. Ez a CSS tulajdonság definiálja az irányzékot, amely mentén az elemek a konténerbe vannak helyezve, a következő értékek segítségével:</p><ul><li><code>row</code>: Az elemek a szöveg irányával megegyezően helyezkednek el.</li><li><code>row-reverse</code>: Az elemek a szöveg irányával ellentétes sorrendben helyezkednek el.</li><li><code>column</code>: Az elemek fentről lefelé rendeződnek.</li><li><code>column-reverse</code>: Az elemek lentről felfelé rendeződnek.</li></ul>',
      eo:
        '<p>La ranoj bezonas esti en la sama ordo kiel iliaj avkolilifolioj pere de <code>flex-direction</code>. Tiu ĉi CSS-a trajto difinas la direkton ke elementoj estas metataj en la ujon, kaj akceptas la sekvajn valorojn:</p><ul><li><code>row</code>: Elementoj estas metataj samkiel la teksta direkto.</li><li><code>row-reverse</code>: Elementoj metiĝas male al la teksta direkto.</li><li><code>column</code>: Elementoj metatas supre malsupren.</li><li><code>column-reverse</code>: Elementoj metatas malsupre supren.</li></ul>',
      sv:
        '<p>Grodorna behöver ställa sig i samma ordning som blombladen genom att använda <code>flex-direction</code>. Denna attribut definerar vilket håll objekten är placerade i inuti containern och accepterar följande värden:</p><ul><li><code>row</code>: Objekten är placerade åt samma håll som vanlig text.</li><li><code>row-reverse</code>: Objekten är placerade åt motsat håll som vanlig text.</li><li><code>column</code>: Objekten är placerade uppifrån och ner.</li><li><code>column-reverse</code>: Objekten är placerade nerifrån och upp.</li></ul>',
      uk:
        '<p>Жабенята мають бути в тому ж порядку що і їх листя латаття. Використовуй <code>flex-direction</code> - ця CSS властивість визначає напрямок елементів в контейнері та може набувати наступних значень:</p><ul><li><code>row</code>: елементи розташовані так само, як напрямок тексту.</li><li><code>row-reverse</code>: елементи розташовані протилежно напрямку тексту.</li><li><code>column</code>: елементи розташовані з гори до низу.</li><li><code>column-reverse</code>: елементи розташовані з низу до гори.</li></ul>',
      hi:
        '<p><code>flex-direction</code> की मदद से मेंढकों को लिली के पत्ते के समान क्रम में लाइए। यह CSS प्रॉपर्टी कंटेनर के अन्दर किसी वस्तु की दिशा निर्धारित करती है, एवं निम्न मान स्वीकार करती है:</p><ul><li><code>row</code>: वस्तुएं पाठ दिशा के अनुरूप हो जाती है।</li><li><code>row-reverse</code>: वस्तुएं पाठ दिशा के अनुरूप हो जाती हैं।</li><li><code>column</code>: वस्तुएं लम्ब रूप में उपर से नीचे की ओर हो जाती हैं।</li><li><code>column-reverse</code>: वस्तुएं लम्ब रूप में नीचे से उपर की ओर हो जाती हैं।</li></ul>',
      sr:
        '<p>Поређај жабице као што је редослед локвања користећи <code>flex-direction</code>. Ово CSS својство одређује смер у коме су елементи распоређени у контејнеру и прихвата следеће вредности:</p><ul><li><code>row</code>: Елементи су распоређени у смеру текста.</li><li><code>row-reverse</code>:  Елементи су распоређени супротно од смера текста.</li><li><code>column</code>: Елементи су распоређени одозго према доле.</li><li><code>column-reverse</code>: Елементи су распоређени одоздо према горе.</li></ul>',
      nl:
        '<p>De kikkers moeten in dezelfde volgorde als hun lelieblaadjes terecht komen, maak hiervoor gebruik van <code>flex-direction</code>. Deze CSS eigenschap bepaald de richting in dewelke de elementen in hun container geplaatst worden, en aanvaard de volgende waarden:</p><ul><li><code>row</code>: Elementen worden geplaatst in dezelfde richting als deze van de tekst.</li><li><code>row-reverse</code>: Elementen worden geplaatst in de tegenovergestelde richting van de tekst.</li><li><code>column</code>: Elementen worden onder elkaar geplaatst.</li><li><code>column-reverse</code>: Elementen worden boven elkaar geplaatst.</li></ul>',
      ta:
        '<p><code>flex-direction</code> பயன்படுத்தி தவளைகள் தங்கள் இலைகளை அதே வரிசையில் பெற வேண்டும்.இந்த CSS property எந்த  திசையில் பொருட்கள் வைக்கப்படுகின்றன என வரையறுக்கிறது, மற்றும் பின்வரும் மதிப்புகளை ஏற்றுக்கொள்கிறது:</p><ul><li><code>row</code>: பொருட்கள் (Text)உரை உள்ள அதே திசையில் வைக்கப்படும்.</li><li><code>row-reverse</code>: பொருட்கள் (Text)உரைக்கு எதிர் திசையில் வைக்கப்படும்.</li><li><code>column</code>: பொருட்கள் மேலிருந்து கீழாக வைக்கப்படும்.</li><li><code>column-reverse</code>: பொருட்கள் கீழிருந்து மேலாக வைக்கப்படும்.</li></ul>',
      ml:
        '<p><code>flex-direction</code> ഉപയോഗിച്ച് താവളകൾക്കു അവരുടെ താമര ഇലകളുടെ അതെ ഓർഡറിൽ കൊണ്ടുവരുക . ഈ CSS വസ്തു, കണ്ടെയ്നറിൽ ദിശ ഇനങ്ങൾ സ്ഥാപിച്ചിരിക്കുന്നു എന്ന് നിർവ്വചിക്കുകയും ഇനിപ്പറയുന്ന മൂല്യങ്ങൾ അംഗീകരിക്കുകയും ചെയ്യും:</p><ul><li><code>row</code>: ഇനങ്ങൾ വാചക ദിശ പോലെ തന്നെ വയ്ക്കുന്നു.</li><li><code>row-reverse</code>: ഇനങ്ങൾ ടെക്സ്റ്റ് ദിശയ്ക്ക് വിപരീതമാണ്.</li><li><code>column</code>: ഇനങ്ങൾ മുകളിൽ താഴെയായി.</li><li><code>column-reverse</code>: ഇനങ്ങൾ മുകളിൽ മുകളിലായി സ്ഥാപിക്കുന്നു.</li></ul>',
      el:
        '<p>Οι βάτραχοι πρέπει να μπουν στην ίδια σειρά με τα νούφαρά τους χρησιμοποιώντας το <code>flex-direction</code>. Αυτή η ιδιότητα CSS καθορίζει την κατεύθυνση με την οποία τοποθετούνται τα αντικείμενα στο container, και αποδέχεται τις εξής αξίες:</p><ul><li><code>row</code>: Τα αντικείμενα τοποθετούνται στην ίδια κατεύθυνση με το κείμενο.</li><li><code>row-reverse</code>: Τα αντικείμενα τοποθετούνται σε κατεύθυνση αντίθετη από το κείμενο.</li><li><code>column</code>: Τα αντικείμενα τοποθετούνται από πάνω προς τα κάτω.</li><li><code>column-reverse</code>: Τα αντικείμενα τοποθετούνται από κάτω προς τα πάνω.</li></ul>',
      mk:
        '<p>Жабите треба да се подредат во ист редослед како и нивните листови со користење на <code>flex-direction</code>. Ова CSS својство ја определува насоката во која елементите се поставени во контејнерот, и ги прима следните вредности:</p><ul><li><code>row</code>: Елементите се распоредени исто како и насоката на текстот.</li><li><code>row-reverse</code>: Елементите се распоредени спротивно од насоката на текстот.</li><li><code>column</code>: Елементите се распоредени од горе надолу.</li><li><code>column-reverse</code>: Елементите се распоредени од долу нагоре.</li></ul>',
      uz:
        "<p>Somsalarni <code>flex-direction</code> xususiyatidan foydalanib qorni och xo'randalarning likoplariga joylash kerak. Bu CSS xususiyat buyumlarning safini yo'naltirishga javob beradi, va quyidagi qiymatlarning biriga ega bo'ladi:</p><ul><li><code>row</code> – buyumlar matn kabi joylanadi (chapdan o'ngga).</li><li><code>row-reverse</code> – buyumlar matn yo'nalishiga teskari joylanadi.</li><li><code>column</code> – buyumlar tepadan pastga joylanadi.</li><li><code>column-reverse</code> – buyumlar pastdan tepaga joylanadi.</li></ul>"
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'flex-direction 2',
    instructions: {
      en:
        '<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      ro:
        '<p>Ajută broaștele să găsească coloana lor de nuferi folosind <code>flex-direction</code>. Această proprietate CSS definește direcția în care sunt așezate elementele în container și acceptă următoarele valori:</p><ul><li><code>row</code>: Elementele sunt așezate la fel ca direcția textului.</li><li><code>row-reverse</code>: Elementele sunt așezate opus față de direcția textului.</li><li><code>column</code>: Elementele sunt așezate de sus în jos.</li><li><code>column-reverse</code>: Elementele sunt așezate de jos în sus.</li></ul>',
      bg:
        '<p>Помогни на жабчетата да намерят своето листо в колоната, използвайки <code>flex-direction</code>. Това CSS свойство определя посоката, в която са разположени елементите в контейнера и приема следните стойности: </p><ul><li><code>row</code>: Елементите са разположени по посока на текста.</li><li><code>row-reverse</code>: Елементите са разположени обратно на посоката на текста.</li><li><code>column</code>: Елементите са разположени от горе надолу.</li><li><code>column-reverse</code>: Елементите са разположени от долу нагоре.</li></ul>',
      de:
        '<p>Hilf den Fr&ouml;schen dabei, die Seerosenbl&auml;tter zu erreichen, indem du <code>flex-direction</code> verwendest. Diese CSS-Eigenschaft legt die Richtung fest, in der die Elemente im Container platziert werden. Sie akzeptiert die folgenden Werte:</p><ul><li><code>row</code>: Elemente in Textrichtung ausrichten.</li><li><code>row-reverse</code>: Elemente entgegen der Textrichtung ausrichten.</li><li><code>column</code>: Elemente von oben nach unten ausrichten.</li><li><code>column-reverse</code>: Elemente von unten nach oben ausrichten.</li></ul>',
      'pt-br':
        '<p>Ajude os sapos a encontrar sua coluna de vitórias-régias usando <code>flex-direction</code>. Esta propriedade CSS define a direção em que os itens são posicionados no container e aceita os seguintes valores:</p><ul><li><code>row</code>: Itens são posicionados na mesma direção do texto.</li><li><code>row-reverse</code>: Itens são posicionados na direção oposta à do texto.</li><li><code>column</code>: Itens são posicionados de cima para baixo.</li><li><code>column-reverse</code>: Itens são posicionados de baixo para cima.</li></ul>',
      es:
        '<p>Ayuda a las ranas a encontrar su hoja de lirio en la columna usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>',
      fr:
        '<p>Aidez les grenouilles à trouver leurs colonnes de nénuphars en utilisant <code>flex-direction</code>. Cette propriété CSS définit la direction dans laquelle les éléments sont placés dans le conteneur, et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>row</code>&nbsp;: Les éléments sont disposés dans la même direction que le texte.</li><li><code>row-reverse</code>&nbsp;: Les éléments sont disposés dans la direction opposée au texte.</li><li><code>column</code>&nbsp;: Les éléments sont disposés de haut en bas.</li><li><code>column-reverse</code>&nbsp;: Les éléments sont disposés de bas en haut.</li></ul>',
      ru:
        '<p>Помоги лягушатам расположиться на своих лилиях используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>',
      fa:
        '<p>به قورباغه ها کمک کنید تا به صورت ستونی روی نیلوفرهای آبی قرار می گیرند با استفاده از <code>flex-direction</code> این کار را انجام دهید. این خاصیت جهت قرار گیری آیتم ها را مشخص می کند, مقادیر این خاصیت عبارتند از :</p><ul><li><code>row</code>: این مقدار برای چیدمان افقی آیتم ها به کار میرود.</li><li><code>row-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li><li><code>column</code>: این مقدار برای چیدمان عمودی آیتم ها به کار میرود.</li><li><code>column-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li></ul>',
      'zh-cn':
        '<p>使用<code>flex-direction</code>属性，帮助青蛙们找到它们该去的列。这个CSS属性定义了元素在容器里摆放的方向，并且接受这些值：</p><ul><li><code>row</code>: 元素摆放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素摆放的方向和文字方向相反。</li><li><code>column</code>: 元素从上放到下。</li><li><code>column-reverse</code>: 元素从下放到上。</li></ul>',
      'zh-tw':
        '<p>使用<code>flex-direction</code>屬性，幫助青蛙們找到它們該去的行。這個CSS屬性定義了元素在容器裏擺放的方向，並且接受這些值：</p><ul><li><code>row</code>: 元素擺放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素擺放的方向和文字的方向相反。</li><li><code>column</code>: 元素從上放到下。</li><li><code>column-reverse</code>: 元素從下放到上。</li></ul>',
      tr:
        '<p><code>flex-direction</code> kuralını kullanarak, kurbağaların kendi nilüfer yapraklarını bulmasına yardımcı olun. Bu CSS kuralı öğelerin hangi yönde yerleştireleceğini belirler ve şu değerleri alır:</p><ul><li><code>row</code>: Öğeler yazı yönü ile aynı yönde yerleştirilir.</li><li><code>row-reverse</code>: Öğeler yazı yönünün tersi yönünde yerleştirilir.</li><li><code>column</code>: Öğeler yukarıdan aşağıya doğru yerleştirilir.</li><li><code>column-reverse</code>: Öğeler aşağıdan yukarıya doğru yerleştirilir.</li></ul>',
      it:
        "<p>Aiuta le rane a trovare la loro ninfea usando <code>flex-direction</code>. Questa proprieta' CSS definisce la direzione in cui gli elementi verranno sistemati nel contenitore ed accetta i seguenti valori:</p><ul><li><code>row</code>: Gli elementi sono posizionati seguendo la stessa direzione del testo.</li><li><code>row-reverse</code>: Gli elementi sono posizionati nella direzione opposta del testo.</li><li><code>column</code>: Gli elementi sono posizionati dall'alto verso il basso.</li><li><code>column-reverse</code>: Gli elementi sono posizionati dal basso verso l'alto.</li></ul>",
      ko:
        '<p><code>flex-direction</code>을 사용하여 개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다:</p><ul><li><code>row</code>: 요소들을 텍스트의 방향과 동일하게 정렬합니다.</li><li><code>row-reverse</code>: 요소들을 텍스트의 반대 방향으로 정렬합니다.</li><li><code>column</code>: 요소들을 위에서 아래로 정렬합니다.</li><li><code>column-reverse</code>: 요소들을 아래에서 위로 정렬합니다.</li></ul>',
      lt:
        '<p>Naudodami <code>flex-direction</code> padėkite varlytėms rasti stulpelį, kuriame yra jų lelijos lapai. Ši CSS komanda nusako kryptį, pagal kurią elementai yra sudėliojami supančio elemento viduje ir reaguoja į šias vertes:</p><ul><li><code>row</code>: Elementai yra rikiuojami teksto skaitymo kryptimi.</li><li><code>row-reverse</code>: Elementai yra rikiuojami atvirkščiai teksto skaitymo krypties.</li><li><code>column</code>: Elementai yra rikiuojami iš viršaus į apačią.</li><li><code>column-reverse</code>: Elementai yra rikiuojami iš apačios į viršų.</li></ul>',
      vi:
        '<p>Giúp đỡ những chú ếch tìm thấy các lá bông súng được sắp xếp theo hàng dọc sử dụng <code>flex-direction</code>. Từ thuộc tính CSS này xác định hướng hạng mục được đặt trong hộp chứa, và chấp nhận các giá trị sau:</p><ul><li><code>row</code>: Các hạng mục được đặt cùng hướng với hướng của từ trong văn bản.</li><li><code>row-reverse</code>: Các hạng mục được đặt ngược hướng với hướng của từ trong văn bản.</li><li><code>column</code>: Các hạng mục được đặt từ trên xuống dưới.</li><li><code>column-reverse</code>: Các hạng mục được đặt từ dưới lên trên.</li></ul>',
      pl:
        '<p>Pomóż żabkom odnaleźć ich kolumny przy pomocy <code>flex-direction</code>. Ta właściwość określa kierunek w jakim elementy w kontenerze są ustawione. Przyjmuje wartości:</p><ul><li><code>row</code>: Elementy są rozmieszczone w kierunku tekstu.</li><li><code>row-reverse</code>: Elementy są rozmieszczone w kierunku przeciwnym do tekstu.</li><li><code>column</code>: Elementy są rozmieszczone od góry do dołu.</li><li><code>column-reverse</code>: Elementy są rozmieszczone od dołu do góry.</li></ul>',
      cs:
        '<p>Pomozte žabkám dostat se na sloupec leknínů pomocí <code>flex-direction</code>.  Tato vlastnost určuje směr, kterým jsou prvky rozmístěny v kontejneru, a akceptuje následující hodnoty:</p><ul><li><code>row</code>: Řádky ve směru textu.</li><li><code>row-reverse</code>: Řádky proti směru textu.</li><li><code>column</code>: Sloupce shora dolů.</li><li><code>column-reverse</code>: Sloupce zdola nahoru.</li></ul>',
      ja:
        '<p><code>flex-direction</code>を使って、カエルたちが自分の蓮の葉を見つけるのを助けてあげましょう。このCSSプロパティーはコンテナー内でアイテムが配置される方向を決定します。また以下の値を取ります。</p><ul><li><code>row</code>: アイテムは文章と同じ方向に配置されます。</li><li><code>row-reverse</code>: アイテムは文章と逆の方向に配置されます。</li><li><code>column</code>: アイテムは上から下に向かって配置されます。</li><li><code>column-reverse</code>: アイテムは下から上に向かって配置されます。</li></ul>',
      hu:
        '<p>Segíts a békáknak megtalálni a tündérrózsáikat a <code>flex-direction</code> használatával. Ez a CSS tulajdonság definiálja az irányzékot, amely mentén az elemek a konténerbe vannak helyezve, a következő értékek segítségével:</p><ul><li><code>row</code>: Az elemek a szöveg irányával megegyezően helyezkednek el.</li><li><code>row-reverse</code>: Az elemek a szöveg irányával ellentétes sorrendben helyezkednek el.</li><li><code>column</code>: Az elemek fentről lefelé rendeződnek.</li><li><code>column-reverse</code>: Az elemek lentről felfelé rendeződnek.</li></ul>',
      eo:
        '<p>Helpu la ranojn trovi ilian kolumnon de avkolilifolioj pere de <code>flex-direction</code>. Tiu ĉi CSS-a trajto difinas la direkton ke elementoj estas metataj en la ujon, kaj akceptas la sekvajn valorojn:</p><ul><li><code>row</code>: Elementoj estas metataj samkiel la teksta direkto.</li><li><code>row-reverse</code>: Elementoj metiĝas male al la teksta direkto.</li><li><code>column</code>: Elementoj metatas supre malsupren.</li><li><code>column-reverse</code>: Elementoj metatas malsupre supren.</li></ul>',
      sv:
        '<p>Hjälp grodorna att hitta sina blomblad genom att använda <code>flex-direction</code>. Denna attribut definerar vilket håll objekten är placerade i inuti containern och accepterar följande värden:</p><ul><li><code>row</code>: Objekten är placerade åt samma håll som vanlig text.</li><li><code>row-reverse</code>: Objekten är placerade åt motsat håll som vanlig text.</li><li><code>column</code>: Objekten är placerade uppifrån och ner.</li><li><code>column-reverse</code>: Objekten är placerade nerifrån och upp.</li></ul>',
      uk:
        '<p>Допоможіть жабенятам потрапити на свої вертикальні листки латаття, використав <code>flex-direction</code>. Ця CSS властивість визначає напрямок елементів в контейнері та може набувати наступних значень:</p><ul><li><code>row</code>: елементи розташовані так само, як напрямок тексту.</li><li><code>row-reverse</code>: елементи розташовані протилежно напрямку тексту.</li><li><code>column</code>: елементи розташовані з гори до низу.</li><li><code>column-reverse</code>: елементи розташовані з низу до гори.</li></ul>',
      hi:
        '<p><code>flex-direction</code> की मदद से मेंढकों को उनके कॉलम तक पहुंचाइये। यह CSS प्रॉपर्टी कंटेनर के अन्दर किसी वस्तु की दिशा निर्धारित करती है, एवं निम्न मान स्वीकार करती है:</p><ul><li><code>row</code>: वस्तुएं पाठ दिशा के अनुरूप हो जाती है।</li><li><code>row-reverse</code>: वस्तुएं पाठ दिशा के अनुरूप हो जाती हैं।</li><li><code>column</code>: वस्तुएं लम्ब रूप में उपर से नीचे की ओर हो जाती हैं।</li><li><code>column-reverse</code>: वस्तुएं लम्ब रूप में नीचे से उपर की ओर हो जाती हैं।</li></ul>',
      sr:
        '<p>Помози жабицама да нађу своју колону локвања користећи <code>flex-direction</code>. Ово CSS својство дефинише смер у коме су елементи распоређени у контејнеру и прихвата следеће вредности:</p><ul><li><code>row</code>: Елементи су распоређени у смеру текста.</li><li><code>row-reverse</code>:  Елементи су распоређени супротно од смера текста.</li><li><code>column</code>: Елементи су распоређени одозго према доле.</li><li><code>column-reverse</code>: Елементи су распоређени одоздо према горе.</li></ul>',
      nl:
        '<p>Help de kikkers naar de juiste kolom lelieblaadjes door gebruik te maken van <code>flex-direction</code>. Deze CSS eigenschap bepaald de richting in dewelke de elementen in hun container geplaatst worden, en aanvaard de volgende waarden:</p><ul><li><code>row</code>: Elementen worden geplaatst in dezelfde richting als deze van de tekst.</li><li><code>row-reverse</code>: Elementen worden geplaatst in de tegenovergestelde richting van de tekst.</li><li><code>column</code>: Elementen worden onder elkaar geplaatst.</li><li><code>column-reverse</code>: Elementen worden boven elkaar geplaatst.</li></ul>',
      ta:
        '<p><code>flex-direction</code> பயன்படுத்தி தவளைகள் தங்கள் இலைகளை அதே வரிசையில் பெற வேண்டும்.இந்த CSS property எந்த  திசையில் பொருட்கள் வைக்கப்படுகின்றன என வரையறுக்கிறது, மற்றும் பின்வரும் மதிப்புகளை ஏற்றுக்கொள்கிறது:</p><ul><li><code>row</code>: பொருட்கள் (Text)உரை உள்ள அதே திசையில் வைக்கப்படும்.</li><li><code>row-reverse</code>: பொருட்கள் (Text)உரைக்கு எதிர் திசையில் வைக்கப்படும்.</li><li><code>column</code>: பொருட்கள் மேலிருந்து கீழாக வைக்கப்படும்.</li><li><code>column-reverse</code>: பொருட்கள் கீழிருந்து மேலாக வைக்கப்படும்.</li></ul>',
      ml:
        '<p><code>flex-direction</code> ഉപയോഗിച്ച് തവളകളെ അവരവരുടെ താമര ഇലകളിക് എത്തിക്കുക . ഈ CSS വസ്തു, കണ്ടെയ്നറിൽ ദിശ ഇനങ്ങൾ സ്ഥാപിച്ചിരിക്കുന്നു എന്ന് നിർവ്വചിക്കുകയും ഇനിപ്പറയുന്ന മൂല്യങ്ങൾ അംഗീകരിക്കുകയും ചെയ്യും:</p><ul><li><code>row</code>: ഇനങ്ങൾ വാചക ദിശ പോലെ തന്നെ വയ്ക്കുന്നു.</li><li><code>row-reverse</code>: ഇനങ്ങൾ ടെക്സ്റ്റ് ദിശയ്ക്ക് വിപരീതമാണ്.</li><li><code>column</code>: ഇനങ്ങൾ മുകളിൽ താഴെയായി.</li><li><code>column-reverse</code>: ഇനങ്ങൾ മുകളിൽ മുകളിലായി സ്ഥാപിക്കുന്നു.</li></ul>',
      el:
        '<p>Βοηθήστε τους βατράχους να φτάσουν στην στήλη με τα νούφαρά τους χρησιμοποιώντας το <code>flex-direction</code>. Αυτή η ιδιότητα CSS καθορίζει την κατεύθυνση με την οποία τοποθετούνται τα αντικείμενα στο container, και αποδέχεται τις εξής αξίες:</p><ul><li><code>row</code>: Τα αντικείμενα τοποθετούνται στην ίδια κατεύθυνση με το κείμενο.</li><li><code>row-reverse</code>: Τα αντικείμενα τοποθετούνται σε κατεύθυνση αντίθετη από το κείμενο.</li><li><code>column</code>: Τα αντικείμενα τοποθετούνται από πάνω προς τα κάτω.</li><li><code>column-reverse</code>: Τα αντικείμενα τοποθετούνται από κάτω προς τα πάνω.</li></ul>',
      mk:
        '<p>Помогнете им на жабите да ја најдат нивната колона од листови со користење на <code>flex-direction</code>. Ова CSS својство ја определува насоката во која елементите се поставени во контејнерот, и ги прима следните вредности:</p><ul><li><code>row</code>: Елементите се распоредени исто како и насоката на текстот.</li><li><code>row-reverse</code>: Елементите се распоредени спротивно од насоката на текстот.</li><li><code>column</code>: Елементите се распоредени од горе надолу.</li><li><code>column-reverse</code>: Елементите се распоредени од долу нагоре.</li></ul>',
      uz:
        "<p>Xo'randalarning somsalarini shu likoplarga <code>flex-direction</code> xususiyatidan foydalanib joylang. Bu CSS xususiyat idishdagi buyumlarni saflash yo'nalishiga javob beradi, va quyidagi qiymatlarning biriga ega bo'ladi:</p><ul><li><code>row</code> – buyumlar matn kabi joylanadi (chapdan o'ngga).</li><li><code>row-reverse</code> – buyumlar matn yo'nalishiga teskari joylanadi.</li><li><code>column</code> – buyumlar tepadan pastga joylanadi.</li><li><code>column-reverse</code> – buyumlar pastdan tepaga joylanadi.</li></ul>"
    },
    board: 'gyr',
    style: { 'flex-direction': 'column' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'flex-direction 3',
    instructions: {
      en:
        '<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>',
      ro:
        '<p>Ajută broaștele să ajungă la nuferii lor. Cu toate că par aproape, va fi nevoie de <code>flex-direction</code> și <code>justify-content</code> pentru a le duce acolo.</p><p>Observă că atunci când setezi direcția ca rând sau coloană inversat(ă), începutul și sfârșitul sunt și ele inversate.</p>',
      bg:
        '<p>Помогни на жабчетата да достигнат до своите листа. Въпреки че изглеждат близо, ще трябва да използвате и <code>flex-direction</code>, и <code>justify-content</code>, за да достигнете до там.</p><p>Забележете, че когато използвате обърнат ред или колона (row-reverse или column-reverse), началото и края (flex-start и flex-end) също трябва да бъдат обърнати.</p>',
      de:
        '<p>Hilf den Fr&ouml;schen, ihr Seerosenblatt zu erreichen. Obwohl sie nah dran sind, ben&ouml;tigst du sowohl <code>flex-direction</code>, als auch <code>justify-content</code>, um sie ans Ziel zu f&uuml;hren.</p><p>Hinweis: Wenn du eine umgekehrte Ausrichtung verwendest, sind Start und Ende auch umgedreht.</p>',
      'pt-br':
        '<p>Ajude os sapos a encontrar suas próprias vitórias-régias. Elas parecem estar próximas, mas você precisará de ambas propriedades, <code>flex-direction</code> e <code>justify-content</code>, para levá-los lá.</p><p>Note que quando você define a direção para uma linha ou coluna reversa, start e end também são reversos.</p>',
      es:
        '<p>Ayuda a las ranas a llegar a sus hojas de lirio. A pesar de que ellas parecen estar cerca, necesitarás usar <code>flex-direction</code> y <code>justify-content</code> para llegar hasta allí.</p><p>Nota que cuando estableces la dirección a una fila invertida o columna, el inicio y el final también se invierten.</p>',
      fr:
        "<p>Aidez les grenouilles à arriver à leur propre nénuphar. Bien qu'elles semblent près, il faudra autant <code>flex-direction</code> que <code>justify-content</code> pour y arriver.</p><p>Remarquez que quand vous mettez la direction inversée, le début et la fin sont aussi inversés.</p>",
      ru:
        '<p>Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, все же придется применить и <code>flex-direction</code> и <code>justify-content</code>, чтоб поместить их на свои лилии.</p><p>Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.</p>',
      fa:
        '<p>به قورباغه ها کمک کنید تا نیلوفرهای آبی خود را پیدا کنند. برای این کار از خاصیت های <code>flex-direction</code> و <code>justify-content</code> استفاده کنید.</p><p>توجه داشته باشید وقتی که <span class="en-font">flex-direction</span> مقادیر <span class="en-font">row-reverse</span> یا <span class="en-font">column-reverse</span> داشته باشد شروع و پایان معکوس می شود. </p>',
      'zh-cn':
        '<p>帮助青蛙们回到它们的荷叶上。尽管它们看上去离的很近，需要用<code>flex-direction</code>和<code>justify-content</code>来帮它们到那里。</p><p>注意当你调转行或列的方向后，flex-start和flex-end对应的方向也被调转了。</p>',
      'zh-tw':
        '<p>幫助青蛙們回到它們的荷葉上。儘管它們看上去離得很近，需要用<code>flex-direction</code>和<code>justify-content</code>來幫它們到那裏。</p><p>注意當你調轉列或行的方向後，flex-start和flex-end對應的方向也被調轉了。</p>',
      tr:
        '<p>Kurbağaların kendi nilüfer yapraklarını bulmalarına yardımcı olun. Yakında görünseler de, <code>flex-direction</code> ve <code>justify-content</code> kurallarını kullanarak onları yerlerine götürebilirsiniz.</p><p>Yerleştirme yönünü değiştirdiğini row-reverse ya da column-reverse yaptığınız zaman, başlangıç ve bitiş referanslarının da değiştiğini unutmayın.</p>',
      it:
        '<p>Aiuta le rane a trovare la loro ninfea. Utilizza entrambe <code>flex-direction</code> e <code>justify-content</code> per dirigerle nella giusta posizione.</p><p>Nota che quando viene settata la direzione inversa per le righe o per le colonne, vengono invertite anche i punti di start e end.</p>',
      ko:
        '<p>개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. <code>flex-direction</code>과 <code>justify-content</code>를 모두 사용해야 합니다.</p><p> column-reverse 또는 row-reverse를 사용하면 요소들의 start와 end의 순서도 뒤바뀝니다.</p>',
      lt:
        '<p>Padekite varlytėms persikelti ant savo lelijos lapų. Nors jie ir yra arti, tačiau prireiks abiejų, <code>flex-direction</code> ir <code>justify-content</code> komandų, kad tai pasiektumėte.</p><p>Atkreipkite dėmesį, kad kai nustatote kryptį rikiuojančia atvirkščiai teksto skaitymo krypties arba iš apačios į viršų, elementų rikiavimo pradžia ir pabaiga taip pat apkeičiama pusėmis.</p>',
      vi:
        '<p>Giúp đỡ những chú ếch tìm thấy các lá bông súng của chúng. Mặc dù các lá gần nhau, nhưng sẽ cần cả hai thuộc tính <code>flex-direction</code> và <code>justify-content</code> để đưa chúng đến nơi.</p><p>Chú ý rằng khi bạn thiết lập các chiều hướng của một hàng hoặc cột đảo ngược, điểm bắt đầu và kết thúc cũng được đảo ngược.</p>',
      pl:
        '<p>Pomóż żabkom dotrzeć do swoich listków. Może i wydaje się, że są blisko ale potrzebne ci będą zarówno <code>flex-direction</code> jak i <code>justify-content</code>, aby wykonać to zadanie.</p><p>Zauważ, że ustawiając wartość z dopiskiem reverse, początek i koniec także się odwracają.</p>',
      cs:
        '<p>Pomozte žabkám na své lekníny. Vypadá to snadně, ale budete potřebovat kombinaci <code>flex-direction</code> a <code>justify-content</code>.</p><p>Všiměte si, že když se otočí řádek, prohodí se i začátek a konec.</p>',
      ja:
        '<p>カエルたちがそれぞれの蓮の葉に乗るのを助けてあげましょう。もうほとんど乗っているようにも見えますが、ちゃんと乗せるには<code>flex-direction</code>と<code>justify-content</code>の両方を使う必要があります。</p><p>方向としてrow-reverseやcolumnを指定した場合、始点と終点もまた逆になることに気を付けてください。</p>',
      hu:
        "<p>Segíts a békáknak megtalálni saját tündérrózsáikat. Bár úgy tűnik, egész közel járunk, mégis szükség lesz mind a <code>flex-direction</code>, mind pedig a <code>justify-content</code> tulajdonságra, hogy odajuttassuk őket.</p><p>Vedd figyelembe, hogy ha az irányzékot ellentétesre (reversed) állítod, a 'start' és az 'end' értékek jelentése is megcserélődik.</p>",
      eo:
        '<p>Helpu la ranojn alveni al iliaj akvolilifolioj. Kvankam ili ŝajnas proksimaj, lokigi la ranojn tien postulos ambaŭ <code>flex-direction</code> kaj <code>justify-content</code>.</p><p>Rimarku, kiam oni metas la direkton al inversita vico aŭ kolumno, tiam la komenco kaj la fino ankaŭ estus inversitaj.</p>',
      sv:
        '<p>Hjälp grodorna att ta sig till sina blomblad. Även om dom ser ut att vara nära så kommer det krävas både <code>flex-direction</code> och <code>justify-content</code> för att ta sig dit.</p><p>Notera att när du ändra riktning till en motsat rad eller kolumn så är start och slut också åt motsat håll.</p>',
      uk:
        '<p>Допоможи жабенятам потрапити на своє листя. Хоча може здатися, що вони вже на своїх місцях, але лише використав разом <code>flex-direction</code> та <code>justify-content</code> ти зможеш їх вірно розмістити.</p><p>Зверни увагу на те, що коли встановлюєш зворотній напрямок рядків або стовпчиків, початок і кінець також міняються місцями.</p>',
      hi:
        '<p>मेंढकों को उनके अपने लिली के पत्ते तक पहुंचाइये। हालांकि यह एक जैसे दिखते हैं, फिर भी इन्हें पहुँचाने के लिए हमें <code>flex-direction</code> एवं <code>justify-content</code> की मदद लेनी होगी। </p><p>ध्यान रखिये यदि आप पंक्ति एवं स्तम्भ की दिशा बदलते हैं, तो उनके शुरुआत एवं अंत भी बदल जाते हैं</p>',
      sr:
        '<p>Помози жабицама да дођу до својих локвања. Иако се чини да су близу, требаће ти оба <code>flex-direction</code> и <code>justify-content</code> да их поставиш где треба.</p><p>Обрати пажњу да када дефинишеш смер да буде обрнути ред или колона, почетак и крај су такође обрнути.</p>',
      nl:
        "<p>Help de kikkers naar hun eigen lelieblaadjes. Ook al lijken ze dichtbij, toch zal het zowel <code>flex-direction</code> en <code>justify-content</code> vergen om hen daar te krijgen.</p><p>Let erop dat als je de richting (direction) omwisseld naar een 'reversed-row' of 'reversed-column', de start en het einde ook omgewisseld zijn.</p>",
      ta:
        '<p>தவளைகள் தங்கள் சொந்த இலைகளை பெற உதவவும். அவை நெருங்கி இருப்பது போல் தெரிகிறது என்றாலும், <code>flex-direction</code> மற்றும் <code>justify-content</code> பயன்படுத்தி  தவளைகளுக்கு  வழி காட்டவும்.</p><p>கவனி:  நீங்கள் வரிசை(row) அல்லது நிரல்(column) தலைகீழான  திசையில் அமைக்கும் போது, தொடக்க மற்றும் இறுதி மதிப்புகள்  மேலும் தலைகீழாய் மாறுவதை கவனியுங்கள்.</p>',
      ml:
        '<p>തവളകൾ സ്വന്തം lilypads ലേക്കുള്ള സഹായിക്കുക. അവർ തൊട്ടു അടുത്ത് ആണെങ്കിൽ പോലും  <code>flex-direction</code> and <code>justify-content</code> ഉപയോഗിക്കേണ്ടി വരും അവരെ ലക്ഷ്യസ്ഥാനത്തു എത്തിക്കാൻ </p><p>തിരിയുന്ന വരി അല്ലെങ്കിൽ നിരയിലേക്ക് നിങ്ങൾ ദിശ സജ്ജമാക്കിയാൽ, ആരംഭവും അവസാനവും തിരസ്കരിക്കുന്നു.</p>',
      el:
        '<p>Βοηθήστε τους βατράχους να φτάσουν στα νούφαρά τους. Αν και φαίνονται κοντά, θα χρειαστεί τόσο το <code>flex-direction</code> όσο και το <code>justify-content</code> για να τους πάτε εκεί.</p><p>Σημειώστε ότι όταν ορίζετε την κατεύθυνση σε μια αντεστραμμένη σειρά ή στήλη, η αρχή και το τέλος επίσης αντιστρέφονται.</p>',
      mk:
        '<p>Помогнете им на жабите да стигнат до своите листови. Иако се чинат близу, ќе бидат потребни и <code>flex-direction</code> и <code>justify-content</code> да ги доведеме таму.</p><p>Приметете дека кога ја поставувате насоката на ред или колона обратно, почетокот и крајот исто така треба да бидат обратни.</p>',
      uz:
        "<p>Somsalarni och xo'randalarning likoplariga tarqatib qo'ying. Likoplar yaqin ko'rinar, lekin somsalarni joylash uchun <code>flex-direction</code> va <code>justify-content</code> birikmasi kerak bo'ladi.</p><p>E'tibor bering, saflash yo'nalishni teskariga almashtirsangiz, boshi va oxiri joy bilan almashadi.</p>"
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse', 'justify-content': 'flex-end' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'flex-direction 4',
    instructions: {
      en:
        '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>',
      ro:
        '<p>Ajută broaștele să-și găsească nuferii folosind <code>flex-direction</code> și <code>justify-content</code>.</p><p>Observă că atunci când direcția flex este o coloană, <code>justify-content</code> schimbă pe verticală și <code>align-items</code> pe orizontală.</p>',
      bg:
        '<p>Помогни на жабчетата да намерят своите листа, използвайки <code>flex-direction</code> и <code>justify-content</code>.</p><p>Забележи, че когато flex direction е колона, <code>justify-content</code> променя по вертикалата и <code>align-items</code> променя по хоризонталата.</p>',
      de:
        '<p>Hilf den Fr&ouml;schen mit <code>flex-direction</code> und <code>justify-content</code>, ihr Seerosenblatt zu finden.</p><p>Hinweis: Wenn du eine vertikale Ausrichtung w&auml;hlst, beeinflusst <code>justify-content</code> die vertikale Ausrichtung, und <code>align-items</code> die horizontale.</p>',
      'pt-br':
        '<p>Ajude os sapos a encontrar suas vitórias-régias usando <code>flex-direction</code> e <code>justify-content</code>.</p><p>Note que quando a direção é em coluna, <code>justify-content</code> muda para a vertical e <code>align-items</code> para a horizontal.</p>',
      es:
        '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p><p>Nota que cuando es una columna, <code>justify-content</code> cambia a vertical y <code>align-items</code> a horizontal.</p>',
      fr:
        "<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code> et <code>justify-content</code>.</p><p>Remarquez que quand la direction est en colonne, <code>justify-content</code> change pour la verticale et <code>align-items</code> pour l'horizontale.</p>",
      ru:
        '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p><p>Заметь, когда в качестве направления выбрана колонка, то <code>justify-content</code> влияет на вертикальное выравнивание, а <code>align-items</code> на горизонтальное.</p>',
      fa:
        '<p> به قورباغه ها کمک کنید تا به نیلوفرهای آبی خود برسند برای این کار از خاصیت های <code>flex-direction</code> و <code>justify-content</code> استفاده کنید.</p><p>توجه داشته باشید وقتی <span class="en-font">flex-direction</span> مقدار <span class="en-font">column</span> داشته باشد, محور <code>justify-content</code> عمودی و <code>align-items</code> افقی می شود.</p>',
      'zh-cn':
        '<p>用<code>flex-direction</code>和<code>justify-content</code>来帮助青蛙找到他们的方向</p><p>注意当flex以列为方向时，<code>justify-content</code>控制纵向对齐，<code>align-items</code>控制横向对齐。</p>',
      'zh-tw':
        '<p>用<code>flex-direction</code>和<code>justify-content</code>來幫助青蛙找到他們的方向</p><p>注意當flex以行爲方向時，<code>justify-content</code>控制縱向對齊，<code>align-items</code>控制橫向對齊。</p>',
      tr:
        '<p><code>flex-direction</code> ve <code>justify-content</code> kurallarını kullanarak kurbağaların kendi nilüfer yapraklarını bulmalarına yardımcı olun.</p><p>flex direction kuralı column değerini aldığında, <code>justify-content</code> kuralı dikeyde ve <code>align-items</code> kuralı yatayda çalışır, unutmayın.</p>',
      it:
        "<p>Aiuta le rane a raggiungere le ninfee utilizzando <code>flex-direction</code> e <code>justify-content</code>.</p><p>Nota che quando la direzione flex e' una colonna,  <code>justify-content</code> cambia l'allineamento verticale e <code>align-items</code> quello orizzontale.</p>",
      ko:
        '<p>개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. <code>flex-direction</code>과 <code>justify-content</code>를 모두 사용해야 합니다.</p><p>Flex의 방향이 column일 경우 <code>justify-content</code>의 방향이 세로로, <code>align-items</code>의 뱡향이 가로로 바뀝니다.</p>',
      lt:
        '<p>Naudodami <code>flex-direction</code> ir <code>justify-content</code> padėkite varlytėms rasti savo lelijos lapus.</p><p>Atkreipkite dėmesį, kad kai rikiavimo būdas yra stulpelis <code>justify-content</code> keičia elementų rikiavimą vertikaliai, o <code>align-items</code> horizontaliai.</p>',
      vi:
        '<p>Giúp đỡ những chú ếch tìm thấy các lá bông súng của chúng bằng cách sử dụng <code>flex-direction</code> và <code>justify-content</code>.</p><p>Chú ý rằng khi hướng flex là hàng dọc, <code>justify-content</code> thay đổi thành chiều dọc và <code>align-items</code> to chiều ngang.</p>',
      pl:
        '<p>Pomóż żabkom dotrzeć do listków używając <code>flex-direction</code> i <code>justify-content</code>.</p><p>Zauważ, że w przypadku gdy <code>flex direction</code> ma wartość column to <code>justify-content</code> wyrównuje element pionowo, a <code>align-items</code> poziomo.</p>',
      cs:
        '<p>Pomozte žabkám najít své lekníny pomocí <code>flex-direction</code> a <code>justify-content</code>.</p><p>Všiměte si, že když je hlavní osa svislá, <code>justify-content</code> zarovnává prvky svisle a <code>align-items</code> vodorovně.</p>',
      ja:
        '<p><code>flex-direction</code>と<code>justify-content</code>を使って、カエルたちがそれぞれの蓮の葉を見つけるのを助けてあげてください。</p><p>flexの方向がcolumnのとき、<code>justify-content</code>は垂直方向の、<code>align-items</code>は水平方向の並び方を変えるようになることに気を付けてください。</p>',
      hu:
        '<p>Segíts a békáknak megtalálni a tündérrózsáikat a <code>flex-direction</code> és a <code>justify-content</code> használatával.</p><p>Vedd figyelembe, hogy ha a flex direction értéke column (oszlopos), akkor a <code>justify-content</code> már a függőleges, míg az <code>align-items</code> a vízszintes elrendezésre vonatkozik.</p>',
      eo:
        '<p>Lokigu la ranojn al iliaj akvolilifolioj pere de <code>flex-direction</code> kaj <code>justify-content</code>.</p><p>Rimarku, kiam la flex-a direkto estas kolumno, tiam <code>justify-content</code> ŝanĝus al la vertikalo kaj <code>align-items</code> al la horizontalo.</p>',
      sv:
        '<p>Hjälp grodorna att ta sig till sina blomblad genom att använda <code>flex-direction</code> och <code>justify-content</code>.</p><p>Notera att när flex-direction är en kolumn så ändras <code>justify-content</code> till vertikalt och <code>align-items</code> till horisontellt.</p>',
      uk:
        '<p>Допоможи жабенятам потрапити на своє листя латаття за допомогою <code>flex-direction</code> та <code>justify-content</code>.</p><p>Зауваж, коли напрямок обрано стовпчиком, то <code>justify-content</code> впливає на вертикальне вирівнювання, а <code>align-items</code> - на горизонтальне.</p>',
      hi:
        '<p><code>flex-direction</code> एवं <code>justify-content</code> से मेंढकों को उनके लिली के पत्ते ढुंढने में मदद कीजिये।</p><p>ध्यान दीजिये, जब भी flex direction स्तम्भ की जाती है, <code>justify-content</code> ऊर्ध्वाधर में एवं <code>align-items</code> छैतिज़ में बदल जाता है।</p>',
      sr:
        '<p>Помози жабицама да дођу до својих локвања користећи <code>flex-direction</code> и <code>justify-content</code>.</p><p>Обрати пажњу да када је флекс правац колона <code>justify-content</code> постаје вертикалан а <code>align-items</code> постаје хоризонталан.</p>',
      nl:
        '<p>Help de kikkers hun lelieblaadjes vinden door gebruik te maken van <code>flex-direction</code> en <code>justify-content</code>.</p><p>Let erop dat waneer de flex-direction column (verticaal) is, <code>justify-content</code> van toepassing is op de verticale as, en <code>align-items</code> op de horizontale as.</p>',
      ta:
        '<p><code>flex-direction</code> மற்றும் <code>justify-content</code> பயன்படுத்தி தவளைகள் தங்கள் சொந்த இலைகளை சென்றடைய உதவவும்.</p><p>கவனி:  flex direction மதிப்பு column என்றிருக்கும்போது, <code>justify-content</code> செங்குத்து(vertical) மாற்றங்களையும் மற்றும் <code>align-items</code> கிடைமட்ட(horizontal) மாற்றங்களையும் அடைகிறது.</p>',
      ml:
        '<p><code>flex-direction</code> and <code>justify-content</code> ഉപയോഗിച്ച് വഴു കണ്ടു പിടിക്കാൻ സഹായിക്കുക .</p><p>ശ്രദ്ധിക്കുക, <code>flex direction</code> column ആണെങ്കിൽ <code>justify-content</code> vertical ആകും <code>align-items</code> horizontal ആകും .</p>',
      el:
        '<p>Βοηθήστε τους βατράχους να βρουν τα νούφαρά τους χρησιμοποιώντας τα <code>flex-direction</code> και <code>justify-content</code>.</p><p>Σημειώστε ότι όταν η κατεύθυνση flex είναι μια στήλη, το <code>justify-content</code> αλλάζει στον κάθετο άξονα και το <code>align-items</code> στον οριζόντιο.</p>',
      mk:
        '<p>Помогнете им на жабите да ги најдат своите листови со користење на <code>flex-direction</code> и <code>justify-content</code>.</p><p>Приметете дека кога flex насоката е колона, <code>justify-content</code> променува по вертикалата и <code>align-items</code> по хоризонталата.</p>',
      uz:
        "<p>Somsalarni o'z likoplariga <code>flex-direction</code> va <code>justify-content</code> xususiyatlaridan foydalanib joylang.</p><p>E'tibor bering, <code>flex-direction</code> ni qiymati <code>column</code> ga teng bo'lganida, <code>justify-content</code> buyumlarni tik o'q bo'yicha saflaydi, <code>align-items</code> esa yotiq o'q bo'yicha saflaydi.</p>"
    },
    board: 'gyr',
    style: { 'flex-direction': 'column', 'justify-content': 'flex-end' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'flex-direction 5',
    instructions: {
      en:
        '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>',
      ro:
        '<p>Ajută broaștele să-și găsească nuferii folosind <code>flex-direction</code> și <code>justify-content</code>.</p>',
      bg:
        '<p>Помогни на жабчетата да намерят своите листа, използвайки <code>flex-direction</code> и <code>justify-content</code>.</p>',
      de:
        '<p>Hilf den Fr&ouml;schen mit <code>flex-direction</code> und <code>justify-content</code>, ihr Seerosenblatt zu finden.</p>',
      'pt-br':
        '<p>Ajude os sapos a encontrar suas vitórias-régias usando <code>flex-direction</code> e <code>justify-content</code>.</p>',
      es:
        '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p>',
      fr:
        '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code> et <code>justify-content</code>.</p>',
      ru:
        '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p>',
      fa:
        '<p>به قورباغه ها کمک کنید تا نیلوفرهای آبی خود را پیدا کنند. با استفاده از <code>flex-direction</code> و <code>justify-content</code> این کار را انجام دهید.</p>',
      'zh-cn':
        '<p>用<code>flex-direction</code>和<code>justify-content</code>来帮助青蛙回到他们的荷叶上。</p>',
      'zh-tw':
        '<p>用<code>flex-direction</code>和<code>justify-content</code>來幫助青蛙回到他們的荷葉上。</p>',
      tr:
        '<p><code>flex-direction</code> ve <code>justify-content</code> kurallarını kullanarak kurbağaların kendi nilüfer yapraklarını bulmalarına yardımcı olun.</p>',
      it:
        '<p>Aiuta le rane a raggiungere la loro ninfea utilizzando <code>flex-direction</code> e <code>justify-content</code>.</p>',
      ko:
        '<p><code>flex-direction</code>과 <code>justify-content</code>를 사용하여 개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요.</p>',
      lt:
        '<p>Padėkite varlytėms rasti savo lelijos lapus naudodami <code>flex-direction</code> ir <code>justify-content</code>.</p>',
      vi:
        '<p>Giúp đỡ những chú ếch tìm các lá bông súng của họ bằng cách sử dụng <code>flex-direction</code> và <code>justify-content</code>.</p>',
      pl:
        '<p>Pomóż żabkom dotrzeć do swoich listków używając <code>flex-direction</code> i <code>justify-content</code>.</p>',
      cs:
        '<p>Pomozte žabkám najít své lekníny pomocí <code>flex-direction</code> a <code>justify-content</code>.</p>',
      ja:
        '<p><code>flex-direction</code>と<code>justify-content</code>を使って、カエルたちがそれぞれの蓮の葉を見つけるのを助けてあげてください。</p>',
      hu:
        '<p>Segíts a békáknak megtalálni a tündérrózsáikat a <code>flex-direction</code> és a <code>justify-content</code> használatával.</p>',
      eo:
        '<p>Alvenigu la ranojn al iliaj nimfeofolioj uzante <code>flex-direction</code> kaj <code>justify-content</code>.</p>',
      sv:
        '<p>Hjälp grodorna till sina blomblad genom att använda <code>flex-direction</code> och <code>justify-content</code>.</p>',
      uk:
        '<p>Допоможи жабенятам знайти своє листя латаття скориставшись <code>flex-direction</code> та <code>justify-content</code>.</p>',
      hi:
        '<p><code>flex-direction</code> एवं <code>justify-content</code> की मदद से मेंढकों को उनके लिली के पत्ते तक पहुंचाइये।</p>',
      sr:
        '<p>Помози жабицама да дођу до својих локвања користећи <code>flex-direction</code> и <code>justify-content</code>.</p>',
      nl:
        '<p>Help de kikkers met het vinden van hun lelieblaadjes door gebruik te maken van <code>flex-direction</code> en <code>justify-content</code>.</p>',
      ta:
        '<p><code>flex-direction</code> மற்றும் <code>justify-content</code> பயன்படுத்தி தவளைகள் தங்கள் சொந்த இலைகளை சென்றடைய உதவவும்.</p>',
      ml:
        '<p><code>flex-direction</code> and <code>justify-content</code> ഉപയോഗിച്ച് വഴി കണ്ടെത്താൻ സഹായിക്കുക.</p>',
      el:
        '<p>Βοηθήστε τους βατράχους να βρουν τα νούφαρά τους χρησιμοποιώντας τα <code>flex-direction</code> και <code>justify-content</code>.</p>',
      mk:
        '<p>Помогнете им на жабите да ги најдат своите листови со користење на <code>flex-direction</code> и <code>justify-content</code>.</p>',
      uz:
        "<p><code>flex-direction</code> va <code>justify-content</code> xususiyatlaridan foydalanib somsalarni likoplariga, xo'randalarga tarqatish uchun joylang.</p>"
    },
    board: 'gyr',
    style: {
      'flex-direction': 'column-reverse',
      'justify-content': 'space-between'
    },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'flex-direction 6',
    instructions: {
      en:
        '<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>',
      ro:
        '<p>Ajută broaștele să-și găsească nuferii folosind <code>flex-direction</code>, <code>justify-content</code>, și <code>align-items</code>.</p>',
      bg:
        '<p>Помогни на жабчетата да намерят своите листа, използвайки <code>flex-direction</code>, <code>justify-content</code> и <code>align-items</code>.</p>',
      de:
        '<p>Hilf den Fr&ouml;schen mit <code>flex-direction</code>, <code>justify-content</code> und <code>align-items</code>, ihr Seerosenblatt zu finden.</p>',
      'pt-br':
        '<p>Ajude os sapos a encontrar suas vitórias-régias usando <code>flex-direction</code>, <code>justify-content</code> e <code>align-items</code>.</p>',
      es:
        '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code>, <code>justify-content</code>, y <code>align-items</code>.</p>',
      fr:
        '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code>, <code>justify-content</code>, et <code>align-items</code>.</p>',
      ru:
        '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code>, <code>justify-content</code> и <code>align-items</code>.</p>',
      fa:
        '<p>به قورباغه ها کمک کنید تا نیلوفرهای آبی را بیابند. با استفاده از خاصیت های <code>flex-direction</code>, <code>justify-content</code> و <code>align-items</code> این کار را انجام دهید.</p>',
      'zh-cn':
        '<p>用<code>flex-direction</code>，<code>justify-content</code>以及<code>align-items</code>来帮助青蛙回到他们的荷叶上。</p>',
      'zh-tw':
        '<p>用<code>flex-direction</code>，<code>justify-content</code>以及<code>align-items</code>來幫助青蛙回到他們的荷葉上。</p>',
      tr:
        '<p><code>flex-direction</code>, <code>justify-content</code> ve <code>align-items</code> kurallarını kullanarak kurbağaların kendi nilüfer yapraklarını bulmalarına yardımcı olun.</p>',
      it:
        '<p>Aiuta le rane a raggiungere la loro ninfea utilizzando <code>flex-direction</code>, <code>justify-content</code>, e <code>align-items</code>.</p>',
      ko:
        '<p><code>flex-direction</code>, <code>justify-content</code>, 그리고 <code>align-items</code>를 사용하여 개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요.</p>',
      lt:
        '<p>Padėkite varlytėms rasti savo lelijos lapus naudodami <code>flex-direction</code>, <code>justify-content</code>, ir <code>align-items</code>.</p>',
      vi:
        '<p>Giúp đỡ những chú ếch tìm các lá bông súng của họ bằng cách sử dụng <code>flex-direction</code>, <code>justify-content</code>, và <code>align-items</code>.</p>',
      pl:
        '<p>Pomóż żabkom dotrzeć do swoich listków przy pomocy <code>flex-direction</code>, <code>justify-content</code> i <code>align-items</code>.</p>',
      cs:
        '<p>Pomozte žabkám na lekníny vlastnostmi <code>flex-direction</code>, <code>justify-content</code> a <code>align-items</code>.</p>',
      ja:
        '<p><code>flex-direction</code>と<code>justify-content</code>、<code>align-items</code>を使って、カエルたちがそれぞれの蓮の葉を見つけるのを助けてあげてください。</p>',
      hu:
        '<p>Segíts a békáknak megtalálni a tündérrózsáikat a <code>flex-direction</code>, a <code>justify-content</code>, és az <code>align-items</code> használatával.</p>',
      eo:
        '<p>Helpu la ranojn trovi iliajn akvolilifoliojn pere de <code>flex-direction</code>, <code>justify-content</code>, kaj <code>align-items</code>.</p>',
      sv:
        '<p>Hjälp grodorna till sina blomblad genom att använda <code>flex-direction</code>, <code>justify-content</code> och <code>align-items</code>.</p>',
      uk:
        '<p>Допоможи жабенятам знайти своє листя латаття скориставшись <code>flex-direction</code>, <code>justify-content</code>, та <code>align-items</code>.</p>',
      hi:
        '<p><code>flex-direction</code>, <code>justify-content</code> एवं <code>align-items</code> की मदद से मेंढकों को उनके लिली के पत्ते तक पहुंचाइये।</p>',
      sr:
        '<p>Помози жабицама да дођу до својих локвања користећи <code>flex-direction</code>, <code>justify-content</code> и <code>align-items</code>.</p>',
      nl:
        '<p>Help de kikkers met het vinden van hun lelieblaadjes door gebruik te maken van <code>flex-direction</code>, <code>justify-content</code>, en <code>align-items</code>.</p>',
      ta:
        '<p><code>flex-direction</code>, <code>justify-content</code> மற்றும்  <code>align-items</code> பயன்படுத்தி தவளைகள் தங்கள் சொந்த இலைகளை சென்றடைய உதவவும்.</p>',
      ml:
        '<p><code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code> ഉപയോഗിച്ച് വഴി കണ്ടെത്താൻ സഹായിക്കുക .</p>',
      el:
        '<p>Βοηθήστε τους βατράχους να βρουν τα νούφαρά τους χρησιμοποιώντας τα <code>flex-direction</code>, <code>justify-content</code>, και <code>align-items</code>.</p>',
      mk:
        '<p>Помогнете им на жабите да ги најдат своите листови со користење на <code>flex-direction</code>, <code>justify-content</code>, и <code>align-items</code>.</p>',
      uz:
        "<p><code>flex-direction</code>, <code>justify-content</code> va <code>align-items</code> xususiyatlaridan foydalanib somsalarni o'z likoplariga joylang.</p>"
    },
    board: 'gyr',
    style: {
      'flex-direction': 'row-reverse',
      'justify-content': 'center',
      'align-items': 'flex-end'
    },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'order 1',
    instructions: {
      en:
        '<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value.</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>',
      ro:
        '<p>Câteodată inversarea ordinii rândului sau coloanei nu este de ajuns. În aceste cazuri, putem aplica proprietatea <code>order</code> individual elementelor. În mod implicit, elementele au valoarea 0, dar putem folosi această proprietate să o setăm la o valoare intreagă pozitivă sau negativă.</p><p>Folosește proprietatea <code>order</code> pentru a ordona broaștele în funcție de nuferii lor.</p>',
      bg:
        '<p>Понякога обръщането на реда на елементите в ред или колона не е достатъчно. В тези случаи можем да приложим свойството <code>order</code> към индивидуален елемент. По подразбиране, елементите имат стойност 0, но можем да използваме това свойство, за да я променим, използвайки положително или отрицателно цяло число.</p><p>Използвай свойството <code>order</code>, за да пренаредиш жабчетата според техните листа.</p>',
      de:
        '<p>Manchmal reicht es nicht aus, die horizontale oder vertikale Ausrichtung eines Containers umzukehren. In so einem Fall k&ouml;nnen wir die <code>order</code>-Eigenschaft f&uuml;r einzelne Elemente verwenden. Standardm&auml;&szlig;ig haben alle Element den Wert 0, aber wir k&ouml;nnen die Eigenschaft verwenden, um ihn auf eine positive oder negative ganze Zahl zu setzen.</p><p>Benutze die <code>order</code>-Eigenschaft, um die Fr&ouml;schen entsprechend ihrer Seerosenbl&auml;tter anzuordnen.</p>',
      'pt-br':
        '<p>Às vezes, reverter a ordem de uma coluna ou de um container não é suficiente. Nesses casos, podemos aplicar a propriedade <code>order</code> para itens individuais. Por padrão, itens tem um valor de 0, mas nós podemos usar essa propriedade para alterar para um valor inteiro positivo ou negativo.</p><p>Use a propriedade <code>order</code> para reordenar os sapos de acordo com suas vitórias-régias.</p>',
      es:
        '<p>A veces, invertir el orden de una fila o columna de un contenedor no es suficiente. En esos casos, nosotros podemos aplicar la propiedad <code>order</code> a elementos individuales. Por defecto, los elementos tienen un valor 0, pero nosotros podemos usar esta propiedad para establecerlo a un número entero positivo o negativo.</p><p>Usa la propiedad <code>order</code> para reordenar las ranas de acuerdo a sus hojas de lirio.</p>',
      fr:
        "<p>Parfois, inverser l'ordre de la rangée ou la colonne ne suffit pas. Dans ces cas, on peut appliquer la propriété <code>order</code> à des éléments individuels. Par défaut, les éléments ont une valeur de 0, mais on peut utiliser cette propriété pour changer la valeur à un entier positif ou négatif.</p><p>Utilisez la propriété <code>order</code> pour réorganiser les grenouilles par rapport à leurs nénuphars.</p>",
      ru:
        '<p>Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство <code>order</code> для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.</p><p>Используй свойство <code>order</code>, чтоб разместить лягушат на своих лилиях.</p>',
      fa:
        '<p>گاهی اوقات ما نیاز داریم فقط ایتم ها را جابه جا کنیم. برای این کار خاصیت <code>order</code> استفاده می کنیم. به صورت پیشفرض آیتم ها مقدار <span class="en-font">0</span> دارند, اما با استفاده از این خاصیت شما می توانید مقدار مثبت و منفی برای آیتم ها تعیین کنید. <p>با استفاده از خاصیت <code>order</code> می توانید ترتیب نشستن قورباغه ها روی نیلوفرهای آبی خود را تعیین کنید.</p>',
      'zh-cn':
        '<p>有时候仅仅调转行或列的方向是不够的。在这些情况，我们可以设置单个元素的<code>order</code>属性。元素的属性默认值为0，但是我们设置这个属性为正数或负数。</p><p>用<code>order</code>来调整青蛙的顺序。</p>',
      'zh-tw':
        '<p>有時候僅僅調轉列或行的方向是不夠的。在這些情況，我們可以設置單個元素的<code>order</code>屬性。元素的屬性默認值爲0，但是我們設置這個屬性爲正數或負數。</p><p>用<code>order</code>來調整青蛙的順序。</p>',
      tr:
        "<p>Bazen row ya da column yerleşimini tersine çevirmek yeterli olmaz. Bu gibi durumlarda <code>order</code> kuralı ile öğeleri tek tek sıralandırabiliriz. Öğelerin başlangıç sıra değeri 0'dır, ama biz bu değeri pozitif ya da negatif bir değere eşitleyebiliriz.</p><p><code>order</code> kuralını kullanarak kurbağaları nilüfer yapraklarına göre sıralayın.</p>",
      it:
        "<p>A volte invertire l'ordine di visualizzazione delle righe o delle colonne non e' sufficiente. In questi casi possiamo applicare la proprieta' <code>order</code> sui singoli elementi. Ogni elemento ha assegnato il valore 0 di default ma e' possibile utilizzare questa proprieta' per assegnare un valore intero positivo o negativo.</p><p>Utilizza <code>order</code> per muovere le rane sulla loro ninfea.</p>",
      ko:
        '<p>때때로 컨테이너의 row나 column의 순서를 역으로 바꾸는 것만으로는 충분하지 않습니다. 이러한 경우에는 <code>order</code> 속성을 각 요소에 적용할 수 있습니다. order의 기본 값은 0이며, 양수나 음수로 바꿀 수 있습니다.</p><p><code>order</code> 속성을 이용하여 개구리들의 순서를 수련잎의 순서에 맞게 바꿔주세요.</p>',
      lt:
        '<p>Kartais sukeisti supančio elemento eilutes su stulpeliais vietomis negana. Tokiais atvejais galima pritaikyti komandą <code>order</code> pavieniams elementams. Pagal nutylėjimą elementų eilės tvarką nusakanti vertė yra 0, bet galima naudoti šią komandą, kad vertę prilygintume teigiamam arba neigiamam skaičiui.</p><p>Panaudokite komandą <code>order</code>, kad apkeistumėte varlytes vietomis, pagal jų lelijų lapus.</p>',
      vi:
        '<p>Đôi khi đảo chiều của hộp chứa theo hàng ngang hay hàng dọc là không đủ. Trong những trường hợp này, chúng ta có thể áp dụng thuộc tính <code>order</code> cho từng hạng mục riêng lẻ. Theo mặc định, các hạng mục có giá trị là 0, nhưng chúng ta có thể thay đổi thuộc tính đó với một giá trị số nguyên dương hoặc âm khác.</p><p>Sử dụng thuộc tính <code>order</code> để sắp xếp lại những chú ếch theo các lá bông súng của chúng.</p>',
      pl:
        '<p>Czasami odwracanie wierszy i kolumn kontenera nie wystarcza. W takich przypadkach, możemy zastosować własność <code>order</code> do pojedynczego elementu. Domyślnie elementy mają wartość 0, ale przy pomocy tej własności możemy ustalić kolejność na dowolną dodatnią lub ujemną wartość.</p><p>Przy pomocy własności <code>order</code> zmień kolejność żabek tak, aby każda była na swoim listku.</p>',
      cs:
        '<p>Samotná změna směru někdy nestačí. V těchto případech lze zvolit pořadí pomocí vlastnosti <code>order</code> jednotlivých prvků. Výchozí hodnota je 0, ale můžete použít libovolné kladné či záporné celé číslo.</p><p>Použijte vlastnost <code>order</code> tak, aby se žabky ocitly na správných leknínech.</p>',
      ja:
        '<p>コンテナーの行や列の順序を逆にするだけでは足りないこともままあります。そういった場合、個別のアイテムに<code>order</code>プロパティーを適用することができます。アイテムはデフォルトでは0の値を取りますが、正や負の整数値を設定することもできます。</p><p><code>order</code>プロパティーを使って、蓮の葉に合うようカエルたちを並び替えてください。</p>',
      hu:
        '<p>Időnként a sorok vagy az oszlopok irányának megfordítása nem elégséges. Ilyen esetekben alkalmazhatjuk az <code>order</code> tulajdonságot az egyes elemekre. Alapértelmezettként az elemek a 0 értéket kapják, de lehetőségünk van negatív vagy pozitív egész számot megadni értékként.</p><p>Használd az <code>order</code> tulajdonságot, hogy átrendezd a békákat a tündérrózsáiknak megfelelően.</p>',
      eo:
        '<p>Kelkfoje, inversante la vican aŭ kolumnan ordonon de ujo ne sufiĉas. Tiaokaze, ni povas apliki la <code>order</code> trajton al individuaj elementoj. Defaŭlte, elemento havas nulan valoron, sed oni povas uzi ĉi tiun trajton por ĝin igi pozitiva aŭ negativa entjera valoro.</p><p>Uzu la <code>order</code> trajton por reordigi la ranojn laŭ iliaj nimfeofolioj.</p>',
      sv:
        '<p>Ibland räcker det inte med att ändra ordningen på en rad eller kolumn. I så fall kan man lägga till <code>order</code> på ett individuellt objekt. Från början har alla objekt värdet 0, men vi kan använda denna attribut till att sätta ett positivt eller negativt heltalsvärde.</p><p>Använd <code>order</code> till att ändra ordningen på grodorna så att de hamnar på rätt blomblad.</p>',
      uk:
        '<p>Іноді зміни напрямку показу елементів контейнеру не достатньо. У таких випадках ми можемо застосувати властивість <code>order</code> до потрібних елементів. Типове значення властивості в елементів дорівнює 0, але ми можемо змінити значення на додатне або відʼємне ціле число.</p><p>Використай властивість <code>order</code> для розташування жабенят на своїх листах латаття.</p>',
      hi:
        '<p>कभी-कभी पंक्ति एवं स्तम्भ का क्रम बदलने से भी कुछ नहीं होता। इस स्थिति में हम <code>order</code> प्रॉपर्टी का इस्तेमाल कर सकते हैं। मूलतः वस्तुओं का मान शून्य होता है। लेकिन इस प्रॉपर्टी के लिए सकारात्मक अथवा नकारात्मक पूर्णांक मान के लिए निर्धारित कर सकते हैं।</p><p><code>order</code> प्रॉपर्टी का इस्तेमाल कर मेंढकों को पुनः व्यवस्थित करें।</p>',
      sr:
        '<p>Некад није довољно само променити смер реда или колоне у контејнеру. У таквим случајевима можемо применити <code>order</code> својство на појединачним елементима. Иницијално, елементи имају вредност 0, али ми можемо искористити ово својство и дефинисати га као позитивну или негативну нумеричку вредност.</p><p>Употреби <code>order</code> својство да измениш редослед жабица у складу са локвањима.</p>',
      nl:
        '<p>Soms is het omkeren van de rij/kolom volgorde van een container niet genoeg. In zulke gevallen kunnen we gebruik maken van de <code>order</code> eigenschap op individuele elementen. De standaardwaarde voor elementen is 0, maar we kunnen dit op een positief of negatief geheel getal instellen.</p><p>Maak gebruik van de <code>order</code> eigenschap om de kikkers volgens de volgorde van de lelieblaadjes te ordenen.</p>',
      ta:
        '<p>சில நேரங்களில் வரிசை(row) அல்லது நிரல்(column)  இவற்றை  மாற்றுவது மட்டும் போதாது. இத்தகைய சமயங்களில் தனிப்பட்ட உருப்படிகளுக்கு(items) நாம் <code>order</code> property உபோயோகிக்கலாம். இயல்பாக, உருப்படிகள் 0 என்ற மதிப்பு பெற்றிருக்கும், நாம் இந்த <code>order</code> property பயன்படுத்தி ஒரு நேர்மறை(positive) அல்லது எதிர்மறையான)negative) முழு மதிப்பு கொடுக்கலாம்.</p><p><code>order</code> property பயன்படுத்தி தவளைகள் தங்கள் இலைகளை அதே வரிசையில் பெற உதவவும்</p>',
      ml:
        '<p>ചിലപ്പോൾ ഒരു കണ്ടെയ്നറിന്റെ വരി അല്ലെങ്കിൽ നിര ക്രമം മറികടക്കാൻ പര്യാപ്തമല്ല. ഇങ്ങനെ ഉള്ള സാഹചര്യങ്ങളിൽ <code>order</code> വ്യക്തിഗത ഇനങ്ങളെ മാറ്റുവാൻ സാധിക്കും . സ്വതവേ, ഇനങ്ങൾക്കു് 0 എന്ന മൂല്ല്യം ഉണ്ടെങ്കിലും, ഈ വസ്തുവിനെ പോസിറ്റീവ് അല്ലെങ്കിൽ നെഗറ്റീവ് ഇന്റഗ്രർ മൂല്യമായി സജ്ജമാക്കാൻ നമുക്ക് ഉപയോഗിക്കാം.</p><p><code>order</code> ഉപയോഗിച്ച് തവളകളെ താമര ഇലകളിലേക്കു എത്തിക്കുക .</p>',
      el:
        "<p>Μερικές φορές η αντιστροφή της σειράς ταξινόμησης των σειρών ή των στηλών ενός container δεν είναι αρκετή. Σ' αυτές τις περιπτώσεις, μπορούμε να εφαρμόσουμε την ιδιότητα <code>order</code> σε μεμονωμένα αντικείμενα. Από προεπιλογή, τα αντικείμενα έχουν αξία 0, αλλά μπορούμε να χρησιμοποιήσουμε αυτή την ιδιότητα για να την ορίσουμε σε μία θετική ή αρνητική ακέραιη αξία.</p><p>Χρησιμοποιήστε την ιδιότητα <code>order</code> για να αναδιατάξετε τους βατράχους σύμφωνα με τα νούφαρά τους.</p>",
      mk:
        '<p>Понекогаш превртување на редоследот на редиците или колоните во контејнер не е доволно. Во овие случаи, можеме да го примениме <code>order</code> својството на индивидуални елементи. Стандардно, елементите имаат вредност од 0, но можеме да го искористиме ова својство да ја поставиме на позитивна или негативна вредност.</p><p>Користете го <code>order</code> својството да ги прередите жабите според нивните листови.</p>',
      uz:
        "<p>Ba'zida idishni saflash tartibini teskarisiga o'zgartirish yetarli emas. Shunday hollarda <code>order</code> xususiyatini ayrim buyumlarga nisbatan ishlating. <code>Order</code> so'zi tartibni anglatadi. <code>order</code> xususiyatining odatiy qiymati 0 ga teng, va shu xususiyat musbat yoki manfiy qiymatga ega bo'lishi mumkin.</p><p><code>order</code> xususiyatidan somsalarning tartibini o'zgartirish uchun foydalaning.</p>"
    },
    board: 'gyr',
    selector: '> :nth-child(2)',
    classes: { '#xontaxta, #background': 'wrap' },
    style: { order: '2' },
    before: '#xontaxta {\n  display: flex;\n}\n\n.sariq {\n',
    after: '}'
  },
  {
    name: 'order 2',
    instructions: {
      en:
        '<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>',
      ro:
        '<p>Folosește proprietatea <code>order</code> pentru a trimite broasca la nufărul ei.</p>',
      bg:
        '<p>Използвай свойството <code>order</code>, за да изпратиш червеното жабче в негото листо.</p>',
      de:
        '<p>Benutze die <code>order</code>-Eigenschaft, um den roten Frosch zu seinem Seerosenblatt zu f&uuml;hren.</p>',
      'pt-br':
        '<p>Use a propriedade <code>order</code> para levar o sapo vermelho à sua vitória-régia.</p>',
      es:
        '<p>Usa la propiedad <code>order</code> para enviar la rana de color rojo a su hoja de lirio.</p>',
      fr:
        '<p>Utilisez la propriété <code>order</code> pour envoyer la grenouille rouge à son nénuphar.</p>',
      ru:
        '<p>Используй свойство <code>order</code>, чтоб отправить красного лягушонка на его лилию.</p>',
      fa:
        '<p>با استفاده از خاصیت <code>order</code> قورباغه قرمز را به نیلوفر آبی خود بفرستید.</p>',
      'zh-cn': '<p>用<code>order</code>属性来把红青蛙送回它的荷叶去。</p>',
      'zh-tw': '<p>用<code>order</code>屬性來把紅青蛙送回它的荷葉去。</p>',
      tr:
        '<p><code>order</code> kuralını kullanarak kırmızı kurbağayı kendi nilüfer yaprağına gönderin.</p>',
      it:
        "<p>Utilizza la proprieta' <code>order</code> per muovere le rane sul sla loro ninfea.</p>",
      ko:
        '<p><code>order</code> 속성을 사용하여 빨간색 개구리를 빨간색 수련잎으로 보내주세요.</p>',
      lt:
        '<p>Panaudokite komandą <code>order</code>, kad nukeltumėte raudoną varlytę ant jos lelijos lapo.</p>',
      vi:
        '<p>Sử dụng thuộc tính <code>order</code> để đưa chú ếch màu đỏ đến với lá bông súng của mình.</p>',
      pl:
        '<p>Użyj własności <code>order</code>, aby posłać czerwoną żabkę na jej listek.</p>',
      cs:
        '<p>Použijte vlastnost <code>order</code> tak, aby se červená žabka dostala na svůj leknín.</p>',
      ja:
        '<p><code>order</code>プロパティーを使って、赤いカエルを彼の蓮の葉へ送ってください。</p>',
      hu:
        '<p>Használd az <code>order</code> tualjdonságot hogy a vörös békát a tündérrózsájához küldhesd.</p>',
      eo:
        '<p>Uzu la <code>order</code> trajton por alvenigi la ruĝan ranon al ĝia nimfeofolio.</p>',
      sv:
        '<p>Använd <code>order</code> till att flytta den röda grodan till dess blomblad.</p>',
      uk:
        '<p>Скористайся властивістю <code>order</code>, щоб всадити червоне жабеня на свій лист латаття.</p>',
      hi:
        '<p><code>order</code> प्रॉपर्टी का इस्तेमाल कर लाल मेंढकों को उसके लिली के पत्ते तक पहुंचाइये।</p>',
      sr:
        '<p>Искористи <code>order</code> својство да пошаљеш црвену жабицу на њен локвањ.</p>',
      nl:
        '<p>Gebruik de <code>order</code> eigenschap om de rode kikker naar zijn lelieblaadje te sturen.</p>',
      ta:
        '<p><code>order</code> property பயன்படுத்தி சிவப்பு தவளை அதன் இலையினை சென்றடைய உதவவும். <p>',
      ml:
        '<p><code>order</code> ഉപയോഗിച്ച് ചുവന്ന തവളകളെ താമര ഇലകളിലേക്കു എത്തിക്കുക.</p>',
      el:
        '<p>Χρησιμοποιήστε την ιδιότητα <code>order</code> για να στείλετε τον κόκκινο βάτραχο στο νούφαρό του.</p>',
      mk:
        '<p>Користете го <code>order</code> својството да ја пратите црвената жаба до нејзиниот лист.</p>',
      uz:
        "<p>Qizil somsani o'z likopiga joylash uchun <code>order</code> xususiyatidan foydalaning.</p>"
    },
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: { '#xontaxta, #background': 'wrap' },
    style: { order: '-1' },
    before: '#xontaxta {\n  display: flex;\n}\n\n.qizil {\n',
    after: '}'
  },
  {
    name: 'align-self 1',
    instructions: {
      en:
        '<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>',
      ro:
        '<p>O altă proprietate pe care o poți aplica individual elementelor este <code>align-self</code>. Această proprietate acceptă aceleași valori ca <code>align-items</code> și valoarea ei pentru elementul specific.</p>',
      bg:
        '<p>Друго свойство, което можеш да приложиш върху отделен елемент е <code>align-self</code>. Това свойство приема същите стойности като code>align-items</code> и неговата стойност за определен елемент.</p>',
      de:
        '<p><code>align-self</code> ist eine weitere Eigenschaft f&uuml;r einzelne Elemente. Sie akzeptiert die gleichen Werte wie <code>align-items</code>.</p>',
      'pt-br':
        '<p>Outra propriedade que você pode aplicar para itens individuais é <code>align-self</code>. Esta propriedade aceita os mesmos valores que <code>align-items</code> e seus valores são usados para o item específico.</p>',
      es:
        '<p>Otra propiedad que puedes aplicar a elementos individuales es <code>align-self</code>. Esta propiedad acepta los mismos valores de <code>align-items</code> y sus valores son usados para un elemento específico</p>',
      fr:
        "<p>Une autre propriété que vous pouvez appliquer sur des éléments individuels est <code>align-self</code>. Cette propriété accepte les mêmes valeurs que <code>align-items</code>, mais s'applique seulement à l'élément ciblé.</p>",
      ru:
        '<p>Еще одно свойство, которое ты можешь применить к определенному элементу это <code>align-self</code>. Это свойство принимает те же значения, что и <code>align-items</code>.</p>',
      fa:
        '<p>خاصیت دیگری وجود دارد که به شما امکان تراز بندی فردی (یک ایتم) را می دهد، این خاصت <code>align-self</code> نام دارد. مقادیر این خاصیت دقیقا هما مقادیر خاصیت <code>align-items</code> است.</p>',
      'zh-cn':
        '<p>另一个你可以使用的控制单个元素的属性是<code>align-self</code>。这个属性接受和<code>align-items</code>一样的那些值。</p>',
      'zh-tw':
        '<p>另一個你可以使用的控制單個元素的屬性是<code>align-self</code>。這個屬性接受和<code>align-items</code>一樣的那些值。</p>',
      tr:
        "<p>Öğe başına uygulayabileceğiniz bir başka kural ise <code>align-self</code>'tir. Bu kural <code>align-items</code> kuralı ile aynı değerleri alır ve bu değeri o öğe için uygular.</p>",
      it:
        "<p>Un'altra proprieta' che e' possibile applicare ai singoli elementi e' <code>align-self</code>. Essa accetta gli stessi valori di <code>align-items</code>.</p>",
      ko:
        '<p><code>align-self</code>는 개별 요소에 적용할 수 있는 또 다른 속성입니다. 이 속성은 <code>align-items</code>가 사용하는 값들을 인자로 받으며, 그 값들은 지정한 요소에만 적용됩니다.</p>',
      lt:
        '<p>Kita komanda, kurią galima pritaikyti pavieniams elementams yra <code>align-self</code>. Ši komanda reaguoja į tas pačias vertes, kaip ir <code>align-items</code>.</p>',
      vi:
        '<p>Một thuộc tính CSS khác mà bạn có thể áp dụng cho các hạng mục riêng biệt là <code>align-self</code>. Thuộc tính CSS này chấp nhận các giá trị tương tự như <code>align-items</code> và giá trị của nó đối với một hạng mục riêng biệt.</p>',
      pl:
        '<p>Następną własnością stosowaną wobec każdego elementu z osobna jest <code>align-self</code>. Przyjmuje ona wartości takie same jak <code>align-items</code>, ale ma zastosowanie tylko wobec konkretnego elementu.</p>',
      cs:
        '<p>Další vlastností, kterou lze nastavit jednotlivým prvkům, je <code>align-self</code>. Tato vlastnost nabývá stejných hodnot jako <code>align-items</code>, ale ovlivňuje jen vybraný prvek.</p>',
      ja:
        '<p>他にも、個別のアイテムへ設定できるプロパティーとして<code>align-self</code>があります。このプロパティーは<code>align-items</code>と同じ値を受け付け、指定のアイテムの状態だけを変更します。</p>',
      hu:
        '<p>Egy másik, szintén az egyes elemekre alkalmazható tulajdonság az <code>align-self</code>. Ez a tulajdonság ugyanazon értékeket veheti fel, mint az <code>align-items</code> és a beállított érték az adott elemre specifikus lesz.</p>',
      eo:
        '<p>Alia trajto ke oni povas apliki al individuaj elementoj estas <code>align-self</code>. Tiu trajto permesas la samajn valorojn ol <code>align-items</code> kaj ĝia valoro por la specifa elemento.</p>',
      sv:
        '<p>En annan attribut man kan använda på individuella objekt är <code>align-self</code>. Denna attribut accepterar samma värden som <code>align-items</code> och dess värde är specifikt för objektet.</p>',
      uk:
        '<p>Ще одна властивість, котру ти зможеш застосувати до окремого елементу - це <code>align-self</code>. Ця властивість набуває тих самих значень, що й <code>align-items</code>.</p>',
      hi:
        '<p>एक अन्य प्रॉपर्टी <code>align-self</code> जिसे आप प्रत्येक वस्तु पर अलग-अलग लगा सकते हैं। यह प्रॉपर्टी <code>align-items</code> के मान को ही स्वीकार करती है परन्तु किसी विशिष्ट वस्तु के लिए।</p>',
      sr:
        '<p>Још једно својство које можеш применити на појединачним елементима је <code>align-self</code>. Ово својство прихвата исте вредности као <code>align-items</code> и примењује их на конкретном елементу.</p>',
      nl:
        '<p>Een andere eigenschap die je kan toepassen op individuele elementen is <code>align-self</code>. Deze eigenschap aanvaard dezelfde waarden als <code>align-items</code> maar wordt gebruikt om de waarde op individueel niveau te overschrijven.</p>',
      ta:
        '<p> <code>align-self</code> என்ற மற்றொருproperty பயன்படுத்தி தனிப்பட்ட உருப்படிகளை சீரமைக்கலாம். இந்த property, <code>align-items</code>  மதிப்புகளை அப்படியே ஏற்றுக்கொள்ளும்.</p>',
      ml:
        '<p>വ്യക്തിഗത ഇനങ്ങൾക്ക് ഇത് അപ്ലൈ ചെയുവാൻ ആയി <code>align-self</code> ഉപയോഗിക്കാം. ഈ പ്രോപ്പർട്ടി  <code>align-items</code> യുടെ അതേ പ്രോപ്പർട്ടീസ് താനെ സ്വീകരിക്കും </p>',
      el:
        '<p>Μια άλλη ιδιότητα που μπορείτε να εφαρμόσετε σε μεμονωμένα αντικείμενα είναι το <code>align-self</code>. Αυτή η ιδιότητα αποδέχεται τις ίδιες αξίες με το <code>align-items</code>, αλλά ισχύει μόνο για το συγκεκριμένο αντικείμενο.</p>',
      mk:
        '<p>Друго својство кое што можете да го примените на индивидуални елементи е <code>align-self</code>. Ова својство ги прима истите вредности како и <code>align-items</code> и неговата вредност за определен елемент.</p>',
      uz:
        "<p>Ayrim buyumlarga nisbatan ishlatish mumkin bo'lgan xususiyat bu <code>align-self</code>. Bu xususiyat <code>align-items</code> xususiyat kabi qiymatlarga ega bo'lishi mumkin.</p>"
    },
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: { 'align-self': 'flex-end' },
    before:
      '#xontaxta {\n  display: flex;\n  align-items: flex-start;\n}\n\n.sariq {\n',
    after: '}'
  },
  {
    name: 'align-self 2',
    instructions: {
      en:
        '<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>',
      ro:
        '<p>Combină <code>order</code> cu <code>align-self</code> pentru a le ajuta pe broaște să ajungă la destinație.</p>',
      bg:
        '<p>Комбинирай <code>order</code> с <code>align-self</code>, за да помогнеш на жабчетата да достигнат своето местоназначение.</p>',
      de:
        '<p>Kombiniere <code>order</code> mit <code>align-self</code>, um die Fr&ouml;sche zum Ziel zu bringen.</p>',
      'pt-br':
        '<p>Combine <code>order</code> e <code>align-self</code> para levar os sapos aos seus destinos.</p>',
      es:
        '<p>Combina <code>order</code> con <code>align-self</code> para ayudar a las ranas a llegar a sus destinos.</p>',
      fr:
        '<p>Combinez <code>order</code> et <code>align-self</code> pour aider les grenouilles à arriver à destination.</p>',
      ru:
        '<p>Используй <code>order</code> и <code>align-self</code> вместе, чтоб помочь лягушатам добраться к своим целям.</p>',
      fa:
        '<p>با استفاده از خاصیت های <code>order</code> و <code>align-self</code> به قورباغه ها کمک کنید به نیلوفر آبی خود برسند.</p>',
      'zh-cn':
        '<p>用<code>order</code>和<code>align-self</code>的组合来帮助青蛙们到它们的目的地。</p>',
      'zh-tw':
        '<p>用<code>order</code>和<code>align-self</code>的組合來幫助青蛙們到它們的目的地。</p>',
      tr:
        '<p><code>order</code> kuralını <code>align-self</code> kuralı ile birleştirerek kurbağaları varacakları yere gitmelerine yardımcı olun</p>',
      it:
        '<p>Combina <code>order</code> con <code>align-self</code> per aiutare le rane ad arrivare a destinazione.</p>',
      ko:
        '<p><code>order</code>와 <code>align-self</code>를 사용하여 개구리들을 자기 색깔과 같은 수련잎 위로 보내주세요.</p>',
      lt:
        '<p>Panaudokite <code>order</code> ir <code>align-self</code> kombinaciją, kad padėtumėte varlytėms pasiekti savo lelijų lapus.</p>',
      vi:
        '<p>Kết hợp <code>order</code> với <code>align-self</code> giúp các chú ếch đến đúng địa điểm của chúng.</p>',
      pl:
        '<p>Pomóż żabkom dotrzeć do listków przy pomocy kombinacji własności <code>order</code> i <code>align-self</code>.</p>',
      cs:
        '<p>Pomozte žabkám na lekníny kombinací vlastností <code>order</code> a <code>align-self</code>.</p>',
      ja:
        '<p><code>order</code>を<code>align-self</code>を組み合わせて、カエルたちを目的地へ連れて行ってあげましょう。</p>',
      hu:
        '<p>Ötvözd az <code>order</code> és az <code>align-self</code> tulajdonságok erejét, hogy a békák elérjék úticéljukat.</p>',
      eo:
        '<p>Kombinu <code>order</code> kun <code>align-self</code> por helpi la ranojn iri al iliaj cellokoj.</p>',
      sv:
        '<p>Kombinera <code>order</code> och <code>align-self</code> för att hjälpa grodorna till sina blomblad.</p>',
      uk:
        '<p>Скомбінуй <code>order</code> з <code>align-self</code>, щоб допомогти жабенятам дістатися свого призначення.</p>',
      hi:
        '<p><code>order</code> एवं <code>align-self</code> का इस्तेमाल करते हुए मेंढकों को उनके गंतव्य तक पहुंचाइये।</p>',
      sr:
        '<p>Комбинуј <code>order</code> са <code>align-self</code> како би помогао/ла жабицама да стигну до свог циља.</p>',
      nl:
        '<p>Combineer <code>order</code> met <code>align-self</code> om de kikkers naar hun bestemming te leiden.</p>',
      ta:
        '<p><code>order</code> மற்றும் <code>align-self</code> பயன்படுத்தி  தவளைகளுக்கு  வழி காட்டவும். <p>',
      ml:
        '<p><code>order</code> with <code>align-self</code> ഉപയോഗിച്ച് ഉദ്ധിഷ്ടസ്ഥാനത്തു എത്തിക്കുക.</p>',
      el:
        '<p>Συνδυάστε το <code>order</code> με το <code>align-self</code> για να βοηθήσετε τους βατράχους να φτάσουν στους προορισμούς τους.</p>',
      mk:
        '<p>Комбинирајте <code>order</code> со <code>align-self</code> да им помогнете на жабите да стигнат до нивните дестинации.</p>',
      uz:
        "<p>Somsalarni xo'randalarning likoplariga joylash uchun <code>order</code> va <code>align-self</code> birikmasidan foydalaning.</p>"
    },
    board: 'ygygg',
    selector: '> .sariq',
    style: { 'align-self': 'flex-end', order: '2' },
    before:
      '#xontaxta {\n  display: flex;\n  align-items: flex-start;\n}\n\n.sariq {\n',
    after: '}'
  },
  {
    name: 'flex-wrap 1',
    instructions: {
      en:
        '<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>',
      ro:
        '<p>O nu! Broaștele sunt toate înghesuite pe un singur rând de nuferi. Răspândește-le folosind proprietatea <code>flex-wrap</code>, care acceptă următoarele valori:</p><ul><li><code>nowrap</code>: Fiecare element este așezat pe o singură linie.</li><li><code>wrap</code>: Elementele se împart pe mai multe linii.</li><li><code>wrap-reverse</code>: Elementele se împart pe mai multe linii in ordine inversă.</li></ul>',
      bg:
        '<p>О не! Всички жабчета са смачкани на един единствен ред. Разделечи ги, използвайки свойството <code>flex-wrap</code>, което приема следните стойности:</p><ul><li><code>nowrap</code>: Всеки елемент се ситуира на един ред.</li><li><code>wrap</code>: Елементите се подреждат на допълнителни редове.</li><li><code>wrap-reverse</code>: Елементите се подреждат на допълнителни редове в обратен ред.</li></ul>',
      de:
        '<p>Oh nein! Alle Fr&ouml;sche sind in eine Zeile Seerosenbl&auml;tter gequetscht. Verteile sie mit der <code>flex-wrap</code>-Eigenschaft, welche die folgenden Werte akzeptiert:</p><ul><li><code>nowrap</code>: Jedes Element in einer eigenen Zeile platzieren.</li><li><code>wrap</code>: Elemente auf zus&auml;tzliche Zeilen umbrechen.</li><li><code>wrap-reverse</code>: Elemente in umgekehrter Reihenfolge auf zus&auml;tzliche Zeilen umbrechen.</li></ul>',
      'pt-br':
        '<p>Ah, não! Os sapos estão todos apertados em uma única linha de vitórias-régias. Espalhe-os usando a propriedade <code>flex-wrap</code>, que aceita os seguintes valores:</p><ul><li><code>nowrap</code>: Todos os itens são apertados em uma única linha.</li><li><code>wrap</code>: Itens se separam em linhas adicionais.</li><li><code>wrap-reverse</code>: Itens se separam em linhas adicionais em reverso.</li></ul>',
      es:
        '<p>¡Oh, no! Todas las ranas están apretadas en una sola fila de hojas de lirio. Manos a la obra, vamos a distribuirlas correctamente usando la propiedad <code>flex-wrap</code>, la cual acepta los siguientes valores:</p><ul><li><code>nowrap</code>: Cada elemento se ajusta en una sola línea.</li><li><code>wrap</code>: los elementos se envuelven alrededor de líneas adicionales.</li><li><code>wrap-reverse</code>: Los elementos se envuelven alrededor de líneas adicionales en reversa.</li></ul>',
      fr:
        "<p>Oh non! Les grenouilles sont écrasées dans une seule rangée de nénuphars. Distribuez-les en utilisant la propriété <code>flex-wrap</code>, qui accepte les valeurs suivantes&nbsp;:</p><ul><li><code>nowrap</code>&nbsp;: Tous les éléments sont tenus sur une seule ligne.</li><li><code>wrap</code>&nbsp;: Les éléments s'enveloppent sur plusieurs lignes au besoin.</li><li><code>wrap-reverse</code>&nbsp;: Les éléments s'enveloppent sur plusieurs lignes dans l'ordre inversé.</li></ul>",
      ru:
        '<p>О нет! Лягушат сплющило на одном ряду лилий. Раздвинь их с помощью свойства <code>flex-wrap</code>, которое принимает следующие значения:</p><ul><li><code>nowrap</code>: Размеры элементов устанавливаются автоматически, чтоб они поместились в один ряд.</li><li><code>wrap</code>: Элементы автоматически переносятся на новую строку.</li><li><code>wrap-reverse</code>: Элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке.</li></ul>',
      fa:
        '<p>همه قورباغه ها بر روی یک سطر از نیلوفر های آبی به صورت فشرده نشسته اند . با استفاده از خاصیت <code>flex-wrap</code> به آنها کمک کنید, این خاصیت مقادیر ریر را می پذیرد:</p><ul><li><code>nowrap</code>:  این مقدار پیشفرض است و تمامی آیتم ها در یک خط و در کنار هم قرار می‌گیرند.</li><li><code>wrap</code>:  با استفاده از این مقدار آیتم ها در چند خط قرار میگیرند.</li><li><code>wrap-reverse</code>: این مقدار شبیه به wrap است اما به جای اینکه چیدمان آیتم ها از بالا به پایین باشد از پایین به بالا است.</li></ul>',
      'zh-cn':
        '<p>哦不！这些青蛙都挤到一行了。用<code>flex-wrap</code>属性把它们分散看看。这个属性接受这些值：</p><ul><li><code>nowrap</code>: 所有的元素都在一行。</li><li><code>wrap</code>: 元素自动换成多行。</li><li><code>wrap-reverse</code>: 元素自动换成逆序的多行。</li></ul>',
      'zh-tw':
        '<p>哦不！這些青蛙都擠到一列了。用<code>flex-wrap</code>屬性把它們分散看看。這個屬性接受這些值：</p><ul><li><code>nowrap</code>: 所有的元素都在一行。</li><li><code>wrap</code>: 元素自動換成多行。</li><li><code>wrap-reverse</code>: 元素自動換成逆序的多行。</li></ul>',
      tr:
        '<p>Olamaz! Tüm kurbağalar tek sıra nilüfer yapraklarına sıkıştılar. <code>flex-wrap</code> kuralını kullanarak onları dağıtın. Bu kural şu değerleri alır:</p><ul><li><code>nowrap</code>: Tüm öğeler tek satıra sığar.</li><li><code>wrap</code>: Öğeler satırlara bölünür.</li><li><code>wrap-reverse</code>: Öğeler satırlara ters sırada bölünür.</li></ul>',
      it:
        "<p>Oh no! Le rane sono ora tutte schiacciate in una sola riga di ninfee. Dirigile al loro posto utilizzando <code>flex-wrap</code>, la quale accetta i seguenti valori:</p><ul><li><code>nowrap</code>: Ogni elemento viene sistemato nella stessa riga.</li><li><code>wrap</code>: Gli elementi vengono sistemati su piu' righe se non ci stanno in una sola.</li><li><code>wrap-reverse</code>: Gli elementi vengono disposti su piu' linee in ordine inverso.</li></ul>",
      ko:
        '<p>오 이런! 개구리들이 한 줄 위에 비좁게 앉아있네요. 다음의 값들을 인자로 받는 <code>flex-wrap</code> 속성을 사용하여 개구리들이 넓게 앉을 수 있도록 해주세요:</p><ul><li><code>nowrap</code>: 모든 요소들을 한 줄에 정렬합니다.</li><li><code>wrap</code>: 요소들을 여러 줄에 걸쳐 정렬합니다.</li><li><code>wrap-reverse</code>: 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.</li></ul>',
      lt:
        '<p>O ne! Varlytės susispaudė vienoje lelijų lapų eilėje. Paskirstykite jas taip, kad kiekviena turėtų savo lelijos lapą. Naudokite komandą <code>flex-wrap</code>, kuri reaguoja į šias vertes:</p><ul><li><code>nowrap</code>: Visi elementai sutalpinami vienoje eilutėje.</li><li><code>wrap</code>: Elementai talpinami keliose eilutėse.</li><li><code>wrap-reverse</code>: Elementai talpinami keliose eilutėse atvirkštine tvarka.</li></ul>',
      vi:
        '<p>Ồ không! Những chú ếch đều được dồn vào một hàng duy nhất theo các lá bông súng. Tách rời chúng ra bằng cách sử dụng thuộc tính <code>flex-wrap</code>, thuộc tính này chấp nhận các giá trị sau:</p><ul><li><code>nowrap</code>: Mỗi hạng mục được dồn vào một hàng duy nhất.</li><li><code>wrap</code>: Các hạng mục quấn xung quanh để tạo thêm dòng.</li><li><code>wrap-reverse</code>: Các hạng mục quấn xung quanh để tạo thêm dòng ngược lại.</li></ul>',
      pl:
        '<p>O, nie! Żabki są ściśnięte w jednym wierszu. Rozprosz je przy pomocy własności <code>flex-wrap</code>, która przyjmue wartości:</p><ul><li><code>nowrap</code>: Każdy element dopasowuje się do pojedynczego wiersza.</li><li><code>wrap</code>: Elementy wystające przechodzą do kolejnych linii.</li><li><code>wrap-reverse</code>: Elementy wystające do kolejnych linii w odwrotnej kolejności.</li></ul>',
      cs:
        '<p>Ale ne! Všechny žabky se tísní na jednom řádku. Rozprostřete je vlastností <code>flex-wrap</code>, která nabývá následujících hodnot:</p><ul><li><code>nowrap</code>: Všechny prvky na jednen řádek.</li><li><code>wrap</code>: Umožňuje zalomení na více řádků.</li><li><code>wrap-reverse</code>: Umožňuje zalomení, ale v opačném směru.</li></ul>',
      ja:
        '<p>おやおや、カエルたちが一列の蓮の葉の上で窮屈そうにしていますね。<code>flex-wrap</code>プロパティーを使って、彼らを広げてあげてください。このプロパティーは以下の値を取ります。</p><ul><li><code>nowrap</code>: 全てのアイテムは、ひとつの行にフィットします。</li><li><code>wrap</code>: アイテムは他の行へ折り返します。</li><li><code>wrap-reverse</code>: アイテムは逆順になって他の行へ折り返します。</li></ul>',
      hu:
        '<p>Jajj, ne! A békák mind rápréselődtek egyetlen sor tündérrózsára. Oszlasd el őket a <code>flex-wrap</code> tulajdonság használatával, amely a következő értékeket veheti fel:</p><ul><li><code>nowrap</code>: Minden elem egyetlen sorba tömörödik.</li><li><code>wrap</code>: Az elemek további sorokba törnek.</li><li><code>wrap-reverse</code>: Az elemek további sorokba törnek fordított irányban.</li></ul>',
      eo:
        '<p>Ve! Ĉiuj ranoj estas premitaj sur nuran vicon de akvolilifolioj. Sternu ilin pere de la <code>flex-wrap</code> trajto, kiu akceptas la sekvajn valorojn:</p><ul><li><code>nowrap</code>: Ĉiuj elementoj laŭmezuras al unuopa linio.</li><li><code>wrap</code>: Elementoj faldas ĉirkaŭe al pluaj linioj.</li><li><code>wrap-reverse</code>: Elementoj faldas ĉirkaŭe al pluaj linioj je inversa ordo.</li></ul>',
      sv:
        '<p>Åh nej! Alla grodorna är ihopklämnda på en och samma rad. Sprid ut dom genom att använda <code>flex-wrap</code>, vilket accepterar följande värden:</p><ul><li><code>nowrap</code>: Alla objekt är placerade på en enkel rad.</li><li><code>wrap</code>: Objekten spiller över till flera rader.</li><li><code>wrap-reverse</code>: Objekten splller över till flera rader i omvänd ordning.</li></ul>',
      uk:
        '<p>Ой ні! Всі жабенята опинилися стиснутими в одному рядку. Розсади їх по місцях, за допомогою властивості<code>flex-wrap</code>, яка набуває таких значень:</p><ul><li><code>nowrap</code>: Кожен елемент буде розташований один за одним в одному рядку. Ширина елементів встановлюється автоматично, щоб вміститись в рядок.</li><li><code>wrap</code>: Елементи переносятся до наступного рядка.</li><li><code>wrap-reverse</code>: Елементи переносятся до наступного рядка у зворотньому порядку.</li></ul>',
      hi:
        '<p>अरे नहीं! सभी मेंढक एक ही पंक्ति में चिपक गए हैं। <code>flex-wrap</code> प्रॉपर्टी द्वारा उन्हें फैलाइये, यह निम्न मान स्वीकार करता है:</p><ul><li><code>nowrap</code>: प्रत्येक वस्तु एक ही पंक्ति में समायोजित करता है।</li><li><code>wrap</code>: वस्तुएं अतिरिक्त पंक्तियों में समायोजित हो जाती हैं।</li><li><code>wrap-reverse</code>: वस्तुएं अतिरिक्त पंक्तियों में समायोजित होती हैं।</li></ul>',
      sr:
        '<p>Ох не! Све жабице су се нагурале у један ред са локвањима. Дај им простора користећи <code>flex-wrap</code> својство, које прихвата следеће вредности:</p><ul><li><code>nowrap</code>: Сви елементи стају у један ред.</li><li><code>wrap</code>: Елементи прелазе у следеће редове.</li><li><code>wrap-reverse</code>: Елементи прелазе у следеће редове у обрнутом редоследу.</li></ul>',
      nl:
        '<p>Oh nee! De kikkers zitten allemaal samengepakt op een enkele rij van lelieblaadjes. Verspreid ze door de <code>flex-wrap</code> eigenschap te gebruiken, deze aanvaard de volgende waarden:</p><ul><li><code>nowrap</code>: Alle elementen worden samengepakt op een enkele lijn.</li><li><code>wrap</code>: Elementen worden over meerdere lijnen gewikkeld.</li><li><code>wrap-reverse</code>: Elementen worden over meerdere lijnen in omgekeerde richting gewikkeld.</li></ul>',
      ta:
        '<p>அய்யகோ! அனைத்து தவளைகளும் ஒரே வரிசையில் உள்ள இலைகளில் அமுக்கப்பட்டுள்ளன. <code>flex-wrap</code> property பயன்படுத்தி அவைகளுக்கிடையே இடைவெளி விடவும். மேலும் இது கீழ்கண்ட மதிப்புகளை ஏற்றுக்கொள்ளும்:</p><ul><li><code>nowrap</code>: ஒவ்வொரு உருப்படியம் ஒற்றை வரியில் சீரமைக்கப்படும்.</li><li><code>wrap</code>: பொருட்கள் கூடுதல் வரியில் அமையுமாறு சீரமைக்கப்படும்.</li><li><code>wrap-reverse</code>: பொருட்கள் கூடுதல் வரியில், எதிர் திசையில் அமையுமாறு சீரமைக்கப்படும்.</li></ul>',
      ml:
        '<p>അയ്യോ! തവളകൾ അലാം ഒരേ വഴിയിൽ പെറ്റു പോയി. <code>flex-wrap</code> ഉപയോഗിച്ച് അവരെ നീക്കി നിർത്തു. </p><ul><li><code>nowrap</code>: ഓരോ ഇനവും ഒരൊറ്റ വരിയ്ക്ക് അനുയോജ്യമാണ്.</li><li><code>wrap</code>: ഇനങ്ങൾ അധിക വരികളിലേക്ക് പൊതിയുക.</li><li><code>wrap-reverse</code>: പിൻവലിക്കിലെ കൂടുതൽ വരികളിലേക്ക് ഇനങ്ങൾ സഞ്ചരിക്കുന്നു.</li></ul>',
      el:
        '<p>Ωχ όχι! Όλοι οι βάτραχοι συμπιέζονται σε μία σειρά νουφάρων. Απλώστε τους χρησιμοποιώντας την ιδιότητα <code>flex-wrap</code>, που αποδέχεται τις εξής αξίες:</p><ul><li><code>nowrap</code>: Όλα τα αντικείμενα τοποθετούνται σε μία μόνο γραμμή.</li><li><code>wrap</code>: Τα αντικείμενα τυλίγονται σε επιπρόσθετες γραμμές.</li><li><code>wrap-reverse</code>: Τα αντικείμενα τυλίγονται σε επιπρόσθετες γραμμές με αντίστροφη σειρά.</li></ul>',
      mk:
        '<p>О не! Сите жабите се смачкани на еден единствен ред од листови. Распределете ги со користење на <code>flex-wrap</code> својството, кое што ги прима следните вредности:</p><ul><li><code>nowrap</code>: Секој елемент опфаќа еден ред.</li><li><code>wrap</code>: Елементите се подредуваат во дополнителни редови.</li><li><code>wrap-reverse</code>: Елементите се подредуваат во дополнителни редови во обратен редослед.</li></ul>',
      uz:
        "<p>Voyy vo'o'o'! Hamma somsalarni bitta qatorda siqib qo'ymang. <code>flex-wrap</code> xususiyatidan foydalanib ularni tarqatib yuboring. Bu xususiyat quyidagi qiymatlarning biriga ega bo'ladi:</p><ul><li><code>nowrap</code> – hamma buyumlar bitta qatorga sig'diriladi.</li><li><code>wrap</code> – buyumlar bir nechta qatorga tarqatiladi (birinchi qatorda joy yetmasa).</li><li><code>wrap-reverse</code> – buyumlar bir nechta qatorga tarqatiladi (birinchi qatorda joy yetmasa). Lekin teskari tarzda joylanadi.</li></ul>"
    },
    board: 'ygggggr',
    style: { 'flex-wrap': 'wrap' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'flex-wrap 2',
    instructions: {
      en:
        '<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>',
      ro:
        '<p>Ajută această armată de broaște să formeze trei coloane ordonate folosind o combinație de <code>flex-direction</code> și <code>flex-wrap</code>.</p>',
      bg:
        '<p>Помогни на тази армия от жабчета да формира три подредени колони, използайки комбинация от <code>flex-direction</code> и <code>flex-wrap</code>.</p>',
      de:
        '<p>Hilf dieser Frosch-Armee, mit <code>flex-direction</code> und <code>flex-wrap</code> drei ordentliche Spalten zu formen.</p>',
      'pt-br':
        '<p>Ajude esse exército de sapos a formar três colunas ordenadas usando uma combinação de <code>flex-direction</code> e <code>flex-wrap</code>.</p>',
      es:
        '<p>Ayuda a este ejército de ranas a ordenarse en tres columnas usando una combinación de <code>flex-direction</code> y <code>flex-wrap</code>.</p>',
      fr:
        '<p>Aidez cette armée de grenouille à former trois belles colonnes en utilisant une combinaison de <code>flex-direction</code> et <code>flex-wrap</code>.</p>',
      ru:
        '<p>Помоги этой армии лягушат выстроиться в три колонки с помощью комбинации <code>flex-direction</code> и <code>flex-wrap</code>.</p>',
      fa:
        '<p>به ارتش قورباغه ها کمک کنید تا به صورت منظم در ستون های خود قرار بگیرند با استفاده از خاصیت های <code>flex-direction</code> و <code>flex-wrap</code> این کار را انجام دهید.</p>',
      'zh-cn':
        '<p>帮这些青蛙们排成整齐的三列。使用<code>flex-direction</code>和<code>flex-wrap</code>的组合。</p>',
      'zh-tw':
        '<p>幫這些青蛙們排成整齊的三行。使用<code>flex-direction</code>和<code>flex-wrap</code>的組合。</p>',
      tr:
        '<p><code>flex-direction</code> ve <code>flex-wrap</code> kombinasyonunu kullanarak bu kurbağa ordusunun üçlü sıralı düzene girmesine yardımcı olun.</p>',
      it:
        '<p>Aiuta questo gruppo di rane a disporsi in tre colonne ordinate usando una combinazione di <code>flex-direction</code> e <code>flex-wrap</code>.</p>',
      ko:
        '<p><code>flex-direction</code>과 <code>flex-wrap</code>을 사용하여 개구리들이 세 column에 정렬할 수 있도록 도와주세요.</p>',
      lt:
        '<p>Padėkite šiai varlyčių armijai išsirikiuoti trimis tvarkingais stulpeliais naudodami <code>flex-direction</code> ir <code>flex-wrap</code> komandų kombinaciją.</p>',
      vi:
        '<p>Giúp đội quân ếch xếp thành ba hàng trật tự bằng cách kết hợp <code>flex-direction</code> và <code>flex-wrap</code>.</p>',
      pl:
        '<p>Pomóż tej zgrai żabek utworzyć trzy uporządkowane kolumny używając własności <code>flex-direction</code> oraz <code>flex-wrap</code>.</p>',
      cs:
        '<p>Pomozte žabkám utvořiy tři zástupy pomocí <code>flex-direction</code> a <code>flex-wrap</code>.</p>',
      ja:
        '<p><code>flex-direction</code>と<code>flex-wrap</code>を使って、このカエルの大群がきちんと三列に並ぶようにしてあげてください。</p>',
      hu:
        '<p>Segíts ezt a békahadsereget, hogy három szabályos oszlop alakzatba rendeződjenek a <code>flex-direction</code> és a <code>flex-wrap</code> használatának ötvözésével.</p>',
      eo:
        '<p>Helpu tiun ĉi aron da ranoj formi tri ordigotajn kolumojn uzante kombinon de <code>flex-direction</code> kaj <code>flex-wrap</code>.</p>',
      sv:
        '<p>Hjälp en hel drös av grodor att ställa sig i tre raka kolumner genom att använda en kombination av <code>flex-direction</code> och <code>flex-wrap</code>.</p>',
      uk:
        '<p>Допоможи армії жаб сформувати три однакові стовпці, за допомогою комбінації властивостей <code>flex-direction</code> та <code>flex-wrap</code>.</p>',
      hi:
        '<p>मेंढकों की सेना को <code>flex-direction</code> एवं <code>flex-wrap</code> के इस्तेमाल से तीन स्तम्भ बनाने में मदद कीजिये।</p>',
      sr:
        '<p>Помози овој војсци жабица да формира три колоне користећи комбинацију <code>flex-direction</code> и <code>flex-wrap</code>.</p>',
      nl:
        '<p>Help dit legertje kikkers om drie ordelijke kolommen te vormen, maak hiervoor gebruik van een combinatie van <code>flex-direction</code> en <code>flex-wrap</code>.</p>',
      ta:
        '<p><code>flex-direction</code> மற்றும் <code>flex-wrap</code>  பயன்படுத்தி  தவளைகளுக்கு  வழி காட்டவும்.</p>',
      ml:
        '<p><code>flex-direction</code> and <code>flex-wrap</code>. ഉപയോഗിച്ച് മൂന്നു ക്രമമായ നിരകൾ ഉണ്ടാക്കുക</p>',
      el:
        '<p>Βοηθήστε αυτή την στρατιά βατράχων να διαμορφώσει τρεις τακτικές στήλες χρησιμοποιώντας έναν συνδυασμό του <code>flex-direction</code> και του <code>flex-wrap</code>.</p>',
      mk:
        '<p>Помогнете ѝ на оваа армија од жаби да формира три подредени колони со користење на комбинација од <code>flex-direction</code> и <code>flex-wrap</code>.</p>',
      uz:
        '<p>Bu somsavoylarni uchta qatorga <code>flex-direction</code> va <code>flex-wrap</code> xususiyatlaridan foydalanib joylang.</p>'
    },
    board: 'gggggrrrrryyyyy',
    style: { 'flex-direction': 'column', 'flex-wrap': 'wrap' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'flex-flow 1',
    instructions: {
      en:
        '<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of one of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>',
      ro:
        '<p>Cele două proprietăți <code>flex-direction</code> și <code>flex-wrap</code> sunt folosite așa de des împreună încăt prescurtarea <code>flex-flow</code> a fost creată să le combine. Această prescurare acceptă valoarea uneia din cele două proprietăți separate de un spați.</p><p>De exemplu, poți să folosești <code>flex-flow: row wrap</code> pentru a seta rânduri si pentru a le împărți pe mai multe linii.</p><p>Incearcă să folosești <code>flex-flow</code> pentru a repeta nivelul anterior.</p>',
      bg:
        '<p>Двете свойства <code>flex-direction</code> и <code>flex-wrap</code> се използват толкова често заедно, че е създадено свойството <code>flex-flow</code>, за да ги комбинира. Това съкратено свойство приема стойността на едно от двете свойства разделени с интервал.</p><p>Например, можеш да използваш<code>flex-flow: row wrap</code>, за да определиш редове и да ги подредиш.</p><p>Опитай да използваш <code>flex-flow</code> и да повториш предишното ниво.</p>',
      de:
        '<p>Die beiden Eigenschaften <code>flex-direction</code> und <code>flex-wrap</code> werden so oft gemeinsam verwendet, dass sie &uuml;ber die Kurzschreibweise <code>flex-flow</code> kombiniert werden k&ouml;nnen. Diese akzeptiert, durch ein Leerzeichen getrennt, die Werte beider Eigenschaften.</p><p>Du kannst zum Beispiel <code>flex-flow: row wrap</code> benutzen, um umbrechende Zeilen zu verwenden.</p><p>Versuche das vorige Level einmal mit <code>flex-flow</code>.</p>',
      'pt-br':
        '<p>As duas propriedades <code>flex-direction</code> e <code>flex-wrap</code> são usadas tão frequentemente juntas que uma propriedade abreviada <code>flex-flow</code> foi criada para combiná-las. Essa propriedade aceita o valor das duas propriedades separados por um espaço.</p><p>Por examplo, você pode usar <code>flex-flow: row wrap</code> para aplicar a direção de linha e quebrar em múltiplas linhas.</p><p>Tente usar <code>flex-flow</code> para refazer o nível anterior.</p>',
      es:
        '<p>Las dos propiedades <code>flex-direction</code> y <code>flex-wrap</code> son usadas a menudo en conjunto con la propiedad abreviada <code>flex-flow</code>, la cual fue creada para combinarlas. Esta propiedad abreviada, acepta un valor de cada una separada por un espacio.</p><p>Por ejemplo, puedes usar <code>flex-flow</code> para establecer filas y envolverlas.</p><p>Trata de usar <code>flex-flow</code> para volver a realizar el nivel anterior.</p>',
      fr:
        "<p>Les deux propriétés <code>flex-direction</code> et <code>flex-wrap</code> sont utilisées tellement souvent ensembles que le raccourci <code>flex-flow</code> a été créé pour les combiner. Ce raccourci accepte les valeurs des deux propriétés séparées par un espace.</p><p>Par exemple, vous pouvez utiliser <code>flex-flow: row wrap</code> pour configurer les colonnes et les faire s'envelopper.</p><p>Essayez d'utiliser <code>flex-flow</code> pour répéter le niveau précédent.</p>",
      ru:
        '<p>Два свойства <code>flex-direction</code> и <code>flex-wrap</code> используются так часто вместе, что было создано свойство <code>flex-flow</code> для их комбинирования. Это свойство принимает значения двух этих свойств, разделеные пробелом.</p><p>Например, ты можешь использовать <code>flex-flow: row wrap</code>, чтоб элементы располагались в ряд и автоматически переносились на новую строку.</p><p>Попробуй использовать <code>flex-flow</code>, чтоб повторить предыдущий уровень.</p>',
      fa:
        '<p>مطمئنا با قابلیت مختصر نویسی در <span class="en-font">css</span> آشنا هستید شما می توانید خاصیت های <code>flex-direction</code> و <code>flex-wrap</code> را در خاصیت <code>flex-flow</code> بنویسید.</p><p>برای مثال, شما می توانید برای این خاصیت به این صورت <code>flex-flow: row wrap</code> مقدار دهید.</p><p>دوباره برای مرحله قبل از خاصیت <code>flex-flow</code> استفاده کنید.</p>',
      'zh-cn':
        '<p><code>flex-direction</code>和<code>flex-wrap</code>两个属性经常会一起使用，所以有缩写属性<code>flex-flow</code>。这个缩写属性接受两个属性的值，两个值中间以空格隔开。</p><p>举个例子，你可以用<code>flex-flow: row wrap</code>去设置行并自动换行。</p><p>试着用<code>flex-flow</code>来重复上一关的任务。</p>',
      'zh-tw':
        '<p><code>flex-direction</code>和<code>flex-wrap</code>兩個屬性經常會一起使用，所以有縮寫屬性<code>flex-flow</code>。這個縮寫屬性接受兩個屬性的值，兩個值中間以空格隔開。</p><p>舉個例子，你可以用<code>flex-flow: row wrap</code>去設置列並自動換行。</p><p>試著用<code>flex-flow</code>來重復上一關的任務。</p>',
      tr:
        '<p><code>flex-direction</code> ve <code>flex-wrap</code> kuralları, <code>flex-flow</code> kısa yazım kuralı ile birlikte yazılabilirler. Bu kısa yazım kuralı, iki kuralın değerlerini aralarında boşluk ile birlikte alır.</p><p>Örneğin, <code>flex-flow: row wrap</code> kuralı ile row ve wrap değerlerini aynı anda verebilirsiniz.</p><p><code>flex-flow</code> kuralını kullanarak bir önceki seviyeyi tekrar edin.</p>',
      it:
        "<p>Le due proprieta' <code>flex-direction</code> e <code>flex-wrap</code> sono usate cosi' di frequente che e' stata creata la proprieta' <code>flex-flow</code> la quale combina le due assieme. Questa proprieta' accetta un valore per ognuna delle due, separati da uno spazio.</p><p>Per esempio puoi utilizzare <code>flex-flow: row wrap</code> per impostare righe e wrap.</p><p>Ripeti il livello precedente utilizzando <code>flex-flow</code>.</p>",
      ko:
        '<p><code>flex-direction</code>과 <code>flex-wrap</code>이 자주 같이 사용되기 때문에, <code>flex-flow</code>가 이를 대신할 수 있습니다. 이 속성은 공백문자를 이용하여 두 속성의 값들을 인자로 받습니다.</p><p>예를 들어, 요소들을 가로선 상의 여러줄에 걸쳐 정렬하기 위해 <code>flex-flow: row wrap</code>을 사용할 수 있습니다.</p><p><code>flex-flow</code>를 사용하여 이전 단계를 반복해보세요.</p>',
      lt:
        '<p>Dvi komandos, <code>flex-direction</code> ir <code>flex-wrap</code>, kartu yra naudojamos taip dažnai, kad buvo sukurta sutrumpinta komanda <code>flex-flow</code>, kuri apjungė jas abi. Ši sutrumpinta komanda reaguoja į dvi atskirų komandų vertes atskirtas tarpu.</p><p>Pavyzdžiui, galite naudoti <code>flex-flow: row wrap</code>, kad nustatytumėte eilučių rikiavimo būdą ir talpintumėte elementus daugiau nei vienoje eilutėje.</p><p>Pabandykite naudoti <code>flex-flow</code>, kad pasiektumėte ankstesnio lygio rezultatą.</p>',
      vi:
        '<p>Cả hai thuộc tính <code>flex-direction</code> và <code>flex-wrap</code> thường được sử dụng với nhau vì thế từ viết tắt <code>flex-flow</code> được tạo ra để kết hợp chúng. Từ viết tắt này chấp nhận giá trị của một trong hai thuộc tính ngăn cách bởi một khoảng trắng.</p><p>Ví dụ, bạn có thể sử dụng <code>flex-flow: row wrap</code> để thiết lập hàng ngang và quấn xung quanh chúng.</p><p>Thử sử dụng <code>flex-flow</code> để lặp lại cấp độ trước đó.</p>',
      pl:
        '<p>Jednoczesne zastosowanie własności <code>flex-direction</code> i <code>flex-wrap</code> występuje bardzo często, dlatego też utworzono własność skrótową <code>flex-flow</code>. Przyjmuje ona dwie wartości rozdzielone spacją.</p><p>Na przykład: wpisując <code>flex-flow: row wrap</code> uzyskamy efekt ułożenia elementów w wierszu i zawijanie ich do kolejnych linii w przypadku gdy któryś wystawałby poza kontener.</p><p>Spróbuj powtórzyć efekt z poprzedniego zadania przy pomocy <code>flex-flow</code>.</p>',
      cs:
        '<p>Protože vlastnosti <code>flex-direction</code> a <code>flex-wrap</code> se často používají najednou, byla přidána vlastnost <code>flex-flow</code>, která je kombinuje. Tato vlastnost akceptuje hodnoty obou, oddělené mezerou.</p><p>Například můžete napsat <code>flex-flow: row wrap</code> pro zalamování ve sloupcích.</p><p>Zkuste nyní předchozí úkol vyřešit pomocí <code>flex-flow</code>.</p>',
      ja:
        '<p><code>flex-direction</code>と<code>flex-wrap</code>の二つのプロパティーはよく一緒に使われます。そこで、これらを統合するショートハンドプロパティー<code>flex-flow</code>が作られました。このショートハンドプロパティーは空白文字で分割した二つのプロパティーの値を受け付けます。</p><p>例えば、<code>flex-flow: row wrap</code>とすることで、並び方と折り返し方を指定することができます。</p><p>試しに、<code>flex-flow</code>を使ってさっきの問題をやり直してみましょう。</p>',
      hu:
        '<p>A <code>flex-direction</code> és a <code>flex-wrap</code> tulajdonságok olyan gyakran használatosak együtt, hogy létrejött a rövidítésükként és ötvözésükként szolgáló <code>flex-flow</code> tulajdonság. Ez az egyszerűsített tulajdonság a két másik tulajdonság értékei közül kaphat értékeket, melyeket egymástól space (szóköz) választ el.</p><p>Például használhatod a <code>flex-flow: row wrap</code> kódot, hogy betördelt sorokat kapj.</p><p>Próbáld ki a <code>flex-flow</code> használatát az előző feladvány megoldására.</p>',
      eo:
        '<p>La du trajtoj <code>flex-direction</code> kaj <code>flex-wrap</code> kune uzatas tiom frekvente kiom la mallongiga trajto <code>flex-flow</code> estis kreata por unuigi ilin. Tiu mallongiga trajto permesas la valoron de unu el la du trajtoj apartigataj per spaco.</p><p>Ekzemple, oni povuzas <code>flex-flow: row wrap</code> por meti viciojn kaj faldi ilin.</p><p>Provu uzi <code>flex-flow</code> por ripeti la antaŭan nivelon.</p>',
      sv:
        '<p>De två attributen <code>flex-direction</code> och <code>flex-wrap</code> används så ofta tillsammans att en kort version kallad <code>flex-flow</code> skapades för att kombinera dem. Denna korta version accepterar värdena från de två attributen separerade med ett blanksteg.</p><p>Till exempel kan du använda <code>flex-flow: row wrap</code> för att sätta rader och få dom att flöda över.</p><p>Testa att använda <code>flex-flow</code> för att repetera den föregående nivån.</p>',
      uk:
        '<p>Дві властивості <code>flex-direction</code> та <code>flex-wrap</code> найчастіше використовуються разом, тому існує скорочена властивість <code>flex-flow</code>, що обʼєднує їх. Ця властивість приймає одне значення кожної з властивостей, які відокремлені пробілом.</p><p>Наприклад, ви можете застосувати <code>flex-flow: row wrap</code> для встановлення рядків та перенесення їх.</p><p>Спробуй скористатися <code>flex-flow</code> для повторення попереднього рівня.</p>',
      hi:
        '<p><code>flex-direction</code> एवं <code>flex-wrap</code> अक्सर इस्तेमाल किये जाते हैं इसलिए <code>flex-flow</code> नयी प्रॉपर्टी इनको मिला कर बनाई गयी। यह प्रॉपर्टी इन दोनों में से किसी प्रॉपर्टी के मानों को ग्रहण करती है जो की सामान अंतर में लिखी गयी हों।</p><p>उदाहरण के लिए, हम <code>flex-flow: row wrap</code> का इस्तेमाल हम वस्तुओं को अनेक प्पंक्तियों में लाने के लिए कर सकते हैं।</p><p><code>flex-flow</code> का इस्तेमाल पिछले स्तर को पार करने में कीजिये।</p>',
      sr:
        '<p>Два својства <code>flex-direction</code> и <code>flex-wrap</code> се јако често користе заједно па је скраћено својство <code>flex-flow</code> креирано да их искомбинује. Ово скраћено својство прихвата две вредности које куцамо одвојено.</p><p>На пример, можеш користити <code>flex-flow: row wrap</code> да дефинишеш редове са преломом.</p><p>Пробај да користиш <code>flex-flow</code> како би поновио претходни ниво.</p>',
      nl:
        '<p>De twee eigenschappen <code>flex-direction</code> en <code>flex-wrap</code> worden zodanig veel in combinatie met elkaar gebruikt dat men er een verkorte eigenschap <code>flex-flow</code> voor heeft gemaakt. Deze verkorte eigenschap aanvaardt de waarde(n) van deze twee eigenschappen gescheiden door een spatie.</p><p>Zo kan je bijvoorbeeld <code>flex-flow: row wrap</code> gebruiken om een omwikkelende rij te maken.</p><p>Probeer <code>flex-flow</code> eens te gebruiken om het vorige niveau te herhalen.</p>',
      ta:
        '<p><code>flex-direction</code> மற்றும் <code>flex-wrap</code> properties அடிக்கடி ஒன்றாகவே பயன்படுத்துவதால் <code>flex-flow</code> எனும் சுருக்கெழுத்து property உருவாக்கப்பட்டது. இந்த சுருக்கெழுத்து property இரண்டு பண்புகளின் மதிப்புகளையும் ஒரு இடைவெளி விட்டு ஒன்று ஏற்றுக்கொள்கிறது.</p><p>உதாரணத்திற்கு, <code>flex-flow: row wrap</code> பயன்படுத்தி rows மற்றும் wrap அமைக்கலாம்.</p><p><code>flex-flow</code> பயன்படுத்தி முன்னர் செய்த நிலையை மீண்டும் செய்யவும்.</p>',
      ml:
        '<p><code>flex-direction</code> and <code>flex-wrap</code> സ്ഥിരം ആയി ഉപയോഗിക്കുന്നതിനാൽ ഇവയെ ഒരുമിച്ചു <code>flex-flow</code> എന്ന് ചുരുക്കി ഉപയോഗിക്കാം. ഈ ഷോർട്ട് ഹാൻഡ് പ്രോപ്പർട്ടി ഒരു സ്പെയ്സ് കൊണ്ട് വേർതിരിച്ച രണ്ട് സവിശേഷതകളിൽ ഒന്ന് അംഗീകരിക്കുകയും ചെയ്യുന്നു.</p><p>ഉദാഹരണം<code>flex-flow: row wrap</code> വരികൾ സജ്ജമാക്കുകയും അവ പൊതിയുക.</p><p>മുൻപത്തെ നിലയിൽ ചെയ്തത് വീണ്ടും <code>flex-flow</code> ഉപയോഗിച്ച് ചെയുക</p>',
      el:
        '<p>Οι δύο ιδιότητες <code>flex-direction</code> και <code>flex-wrap</code> χρησιμοποιούνται τόσο συχνά μαζί ώστε η συντομογραφική ιδιότητα <code>flex-flow</code> δημιουργήθηκε για να τις συνδυάσει. Αυτή η συντομογραφική ιδιότητα αποδέχεται τις αξίες των δύο ιδιοτήτων χωριζόμενες από ένα διάστημα.</p><p>Λόγου χάρη, μπορείτε να χρησιμοποιήστε το <code>flex-flow: row wrap</code> για να ορίσετε σειρές και να τις τυλίξετε.</p><p>Δοκιμάστε να χρησιμοποιήσετε το <code>flex-flow</code> για να επαναλάβετε το προηγούμενο επίπεδο.</p>',
      mk:
        '<p>Двете својства <code>flex-direction</code> и <code>flex-wrap</code> се користат толку често заедно што е создадено својството <code>flex-flow</code> за да ги искомбинира. Ова скратено својство ја прима вредноста на едно од двете својства разделени со спејс.</p><p>На пример, можете да користите <code>flex-flow: row wrap</code> да определите редови и да ги подредите.</p><p>Пробајте да користите <code>flex-flow</code> да го повторите претходното ниво.</p>',
      uz:
        "<p><code>flex-direction</code> va <code>flex-wrap</code> xususiyatlar birga shunday ko'p ishlatiladiki, ularni birlashtirish uchun <code>flex-flow</code> qisqartma xususiyat yaratilgan. Bu xususiyat yuqoridagi ikkita xususiyatlarni qiymatlariga ega bo'lishi mumkin.</p><p>Masalan siz <code>flex-flow: row wrap</code> xususiyatidan saflash yo'nalishini qatorga o'zgartirish uchun, va yangi qatorga o'tkazishni o'rnatish uchun foydalansangiz bo'ladi.</p><p><code>flex-flow</code> xususiyatidan o'tgan bosqichlarni qaytarish uchun foydalaning</p>"
    },
    board: 'gggggrrrrryyyyy',
    style: { 'flex-flow': 'column wrap' },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  },
  {
    name: 'align-content 1',
    instructions: {
      en:
        '<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>',
      ro:
        '<p>Broaștele sunt împrăștiate peste tot lacul, dar nuferii sunt înghesuiți în top. Poți să folosești <code>align-content</code> să setezi cum liniile multiple sunt spațiate una față de cealaltă. Această proprietate acceptă următoarele valori:</p><ul><li><code>flex-start</code>: Liniile sunt adunate în partea de sus a containerului.</li><li><code>flex-end</code>: Liniile sunt adunate în partea de jos a containerului.</li><li><code>center</code>: Liniile sunt adunate în centrul vertical al containerului.</li><li><code>space-between</code>: Liniile sunt afișate cu spațiu egal între ele.</li><li><code>space-around</code>: Liniile sunt afișate cu spațiu egal în jurul lor.</li><li><code>stretch</code>: Liniile sunt întinse pentru a se potrivi in container.</li></ul><p>Acest lucru poate deruta, dar <code>align-content</code> determină spațiul dintre linii, în timp ce <code>align-items</code> determină cum elementele ca un grup sunt poziționate în înteriorul containerului. Când există doar o linie, <code>align-content</code> nu are niciun efect.</p>',
      bg:
        '<p>Жабчетата са разхвърляни из цялото езеро, но листата са скупчени в горната част. Можеш да използваш <code>align-content</code> да определиш как множесто редове се подреждат един до друг. Това свойство приема следните стойности:</p><ul><li><code>flex-start</code>: Редовете са разположени в горната част на контейнера.</li><li><code>flex-end</code>: Редовете са разположени в долната част на контейнера.</li><li><code>center</code>: Редовете са разположени във вертикалния център на контейнера.</li><li><code>space-between</code>: Редовете са разположени с еднакво разстояние между тях.</li><li><code>space-around</code>: Редовете са разположени с еднакво разстояние около тях.</li><li><code>stretch</code>: Редовете са разпънати, за да се съберат в контейнера.</li></ul><p>Това може да бъде объркващо, но <code>align-content</code> определя разстоянието между редовете, докато <code>align-items</code> определя как елементите като цяло са разположени в контейнера. Когато има само един ред, <code>align-content</code> няма ефект.</p>',
      de:
        '<p>Die Fr&ouml;sche sind &uuml;ber den gesamten Teich verteilt, aber die Seerosenbl&auml;tter befinden sich alle am oberen Ende. Du kannst <code>align-content</code> verwenden, um festzulegen, wie der Abstand zwischen mehreren Zeilen aussehen soll. Diese Eigenschaft akzeptiert die folgenden Werte:</p><ul><li><code>flex-start</code>: Zeilen oben im Container ausrichten.</li><li><code>flex-end</code>: Zeilen unten im Container ausrichten.</li><li><code>center</code>: Zeilen in der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Zeilen mit gleichm&auml;&szlig;igem Innenabstand anordnen.</li><li><code>space-around</code>: Zeilen mit gleichm&auml;&szlig;igem Au&szlig;enabstand anordnen.</li><li><code>stretch</code>: Zeilen strecken, um den Container auszuf&uuml;llen.</li></ul><p>Das kann etwas verwirrend sein, aber <code>align-content</code> beeinflusst den Abstand zwischen den Zeilen, wobei <code>align-items</code> festlegt, wie alle Elemente als Ganzes im Container angeordnet werden. Gibt es nur eine Zeile, so hat <code>align-content</code> keine Auswirkung.</p>',
      'pt-br':
        '<p>Os sapos estão espalhados por toda a lagoa, mas as vitórias-régias estão agrupadas no topo. Você pode usar <code>align-content</code> para definir como múltiplas linhas devem ser espaçadas uma das outras. Essa propriedade recebe os seguintes valores:</p><ul><li><code>flex-start</code>: Linhas são agrupadas no topo do container.</li><li><code>flex-end</code>: Linhas são agrupadas no fundo do container.</li><li><code>center</code>:Linhas são agrupadas no centro vertical do container.</li><li><code>space-between</code>: Linhas são posicionadas com espaço igual entre elas.</li><li><code>space-around</code>: Linhas são posicionadas com espaço igual em torno delas.</li><li><code>stretch</code>: Linhas se esticam para preencher o container.</li></ul><p>Isso pode ser confuso, mas <code>align-content</code> determina o espaçamento entre linhas, enquanto <code>align-items</code> determina como as linhas como um todo são alinhadas dentro do container. Quando há só uma linha, <code>align-content</code> não tem nenhum efeito.</p>',
      es:
        '<p>Las ranas están repartidas por todo el estanque, pero las hojas de lirio están agrupadas en la parte superior. Puedes usar <code>align-content</code> para establecer como múltiples líneas están separadas una de otra. Esta propiedad acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Las líneas se posicionan en la parte superior del contenedor.</li><li><code>flex-end</code>: Las líneas se posicionan en la parte inferior del contenedor.</li><li><code>center</code>: Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.</li><li><code>space-between</code>: Las líneas se muestran con la misma distancia entre ellas.</li><li><code>space-around</code>: Las líneas se muestran con la misma separación alrededor de ellas.</li><li><code>stretch</code>: Las líneas se estiran para ajustarse al contenedor.</li></ul><p>Esto puede ser confuso, pero <code>align-content</code> determina el espacio entre las líneas, mientras que <code>align-items</code> determina como los elementos en su conjunto están alineados dentro del contenedor. Cuando hay solo una línea, <code>align-content</code> no tiene efecto.</p>',
      fr:
        "<p>Les grenouilles sont éparpillées partout dans l'étang, mais les nénuphars sont amassés dans le haut. Vous pouvez utiliser <code>align-content</code> pour définir comment plusieurs lignes sont espacées de l'une à l'autre. Cette propriété prend les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les lignes sont amassées dans le haut du conteneur.</li><li><code>flex-end</code>: Les lignes sont amassées dans le bas du conteneur.</li><li><code>center</code>&nbsp;: Les lignes sont amassées dans le centre vertical du conteneur.</li><li><code>space-between</code>&nbsp;: Les lignes s'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les lignes s'affichent avec un espace égal autour d'eux.</li><li><code>stretch</code>&nbsp;: Les lignes sont étirées pour s'adapter au conteneur.</li></ul><p>Ceci peut être mélangeant, mais <code>align-content</code> détermine l'espace entre les lignes, alors que <code>align-items</code> détermine comment les éléments dans leur ensemble sont alignées à l'intérieur du conteneur. Quand il n'y a qu'une seule ligne, <code>align-content</code> n'a aucun effet.</p>",
      ru:
        '<p>Лягушат раскидало по всему пруду, но лилии сгруппированы в верхней части. Ты можешь использовать <code>align-content</code>, чтобы указать, как несколько рядов должны отделяться друг от друга. Данное свойство принимает следующие значения:</p><ul><li><code>flex-start</code>: Ряды группируются в верхней части контейнера.</li><li><code>flex-end</code>: Ряды группируются в нижней части контейнера.</li><li><code>center</code>: Ряды группируются вертикально по центру контейнера.</li><li><code>space-between</code>: Ряды отображаются с одинаковыми расстояниями между ними.</li><li><code>space-around</code>: Ряды отображаются с одинаковыми расстояниями вокруг них.</li><li><code>stretch</code>: Ряды растягиваются, чтоб заполнить контейнер равномерно.</li></ul><p>Это может запутать, но <code>align-content</code> отвечает за расстояние между рядами, в то время как <code>align-items</code> отвечает за то, как элементы в целом будут выровнены в контейнере. Когда только один ряд, <code>align-content</code> ни на что не влияет.</p>',
      fa:
        '<p>قورباغه ها در سراسر برکه پخش شده اند, اما نیلوفر های آبی در بالای برکه هستند. شما با استفاده از <code>align-content</code> آن ها را به صورت ردیفی به بالا هدایت کنید. این خاصیت مقادیر زیر را می پذیرد:</p><ul><li><code>flex-start</code>: با این مقدار <span class="en-font">flex-line</span> ها در ابتدای <span class="en-font">flex-container</span> جمع می‌شوند.</li><li><code>flex-end</code>: با این مقدار <span class="en-font">flex-line</span> ها در انتهای <span class="en-font">flex-container</span> جمع می‌شوند.</li><li><code>center</code>: با این مقدار <span class="en-font">flex-line</span> ها در وسط <span class="en-font">flex-container</span> جمع میشوند.</li><li><code>space-between</code>: با این مقدار فضای خالی به طور مساوی بین <span class="en-font">flex line</span> ها توزیع میشود. خط اول در ابتدا و خط آخر در انتهای <span class="en-font">flex container</span> قرار می‌گیرند و بقیه خطوط در بین این ۲ خط قرار می‌گیرند.</li><li><code>space-around</code>: فضای خالی به طور مساوی بین <span class="en-font">flex-line</span> ها تقسیم می‌شود.</li><li><code>stretch</code>:  با این مقدار <span class="en-font">flex-line</span> ها کشیده می‌شوند و فضای خالی را پر می کنند (این مقدار پیشفرض است).</li></ul>',
      'zh-cn':
        '<p>青蛙们在池塘里到处都是，然而荷叶都在顶部。你可以使用<code>align-content</code>来决定行与行之间隔多远。这个属性接受这些值：</p><ul><li><code>flex-start</code>: 多行都集中在顶部。</li><li><code>flex-end</code>: 多行都集中在底部。</li><li><code>center</code>: 多行居中。</li><li><code>space-between</code>: 行与行之间保持相等距离。</li><li><code>space-around</code>: 每行的周围保持相等距离。</li><li><code>stretch</code>: 每一行都被拉伸以填满容器。</li></ul><p>这可能有些容易混淆，但<code>align-content</code>决定行之间的间隔，而<code>align-items</code>决定元素整体在容器的什么位置。只有一行的时候<code>align-content</code>没有任何效果。</p>',
      'zh-tw':
        '<p>青蛙們在池塘裏到處都是，然而荷葉都在頂部。你可以使用<code>align-content</code>來決定行與行之間隔多遠。這個屬性接受這些值：</p><ul><li><code>flex-start</code>: 多行都集中在頂部。</li><li><code>flex-end</code>: 多行都集中在底部。</li><li><code>center</code>: 多行居中。</li><li><code>space-between</code>: 行與行之間保持相等距離。</li><li><code>space-around</code>: 每行的周圍保持相等距離。</li><li><code>stretch</code>: 每一行都被拉伸以填滿容器。</li></ul><p>這可能有些容易混淆，但<code>align-content</code>決定行之間的間隔，而<code>align-items</code>決定元素整體在容器的什麼位置。只有一行的時候<code>align-content</code>沒有任何效果。</p>',
      tr:
        "<p>Kurbağalar göle dağılmışlar ama nilüfer yaprakları tepede toplanmışlar. <code>align-content</code> kuralı ile satırları birbirinden ayırabilirsiniz. Bu kural şu değerleri alır:</p><ul><li><code>flex-start</code>: Satırlar flex container'ın tepesinde toplanır.</li><li><code>flex-end</code>: Satırlar flex container'ın aşağısında toplanır.</li><li><code>center</code>: Satırlar flex container'ın dikey ortasında toplanır.</li><li><code>space-between</code>: Satırlar aralarında eşit boşluk kalacak şekilde yayılırlar.</li><li><code>space-around</code>: Satırlar etraflarında eşit boşluk kalacak şekilde yayılırlar.</li><li><code>stretch</code>: Satırlar flex container'ı kaplamak için uzarlar.</li></ul><p>Bu kafa karıştırıcı olabilir, ama <code>align-content</code> satırlar için aralıkları belirlerken, <code>align-items</code> öğlerin flex container içerisinde beraberce nasıl hizalanacağını belirler. Eğer tek satır varsa, <code>align-content</code> kuralının bir etkisi yoktur.</p>",
      it:
        "<p>Le rane sono sparse per tutto il lago mentre le ninfee sono tutte ragruppate in alto. Puoi utilizzare <code>align-content</code> per decidere come le linee verranno distanziate tra di loro. Questa proprieta' accetta i seguenti valori:</p><ul><li><code>flex-start</code>: Le linee sono raggruppate all'inizio del contenitore.</li><li><code>flex-end</code>: Le linee sono raggruppate alla fine del contenitore.</li><li><code>center</code>: Le linee vengono centrate verticalmente nel contenitore.</li><li><code>space-between</code>: Le linee occupano tutto lo spazio del contenitore, separate da uguale quantita' di spazio tra di loro.</li><li><code>space-around</code>: Le linee occupano tutto lo spazio disponibile e vengono separate da uguale quantita' di spazio attorno a loro.</li><li><code>stretch</code>: Le linee vengono allungate per occupare tutto lo spazio disponibile.</li></ul><p>Questo puo' confondere ma <code>align-content</code> determina lo spazio tra le linee mentre <code>align-items</code> determina come gli elementi nell'insieme vengono disposti nel contenitore. Se esiste solo una linea <code>align-content</code> non ha alcun effetto.</p>",
      ko:
        '<p>개구리들이 연못의 사방에 퍼져있고, 수련잎은 연못의 위쪽에 모여있습니다. <code>align-content</code>를 사용하여 여러 줄 사이의 간격을 지정할 수 있습니다. 이 속성은 다음의 값들을 인자로 받습니다:</p><ul><li><code>flex-start</code>: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.</li><li><code>flex-end</code>: 여러 줄들을 컨테이너의 바닥에 정렬합니다.</li><li><code>center</code>: 여러 줄들을 세로선 상의 가운데에 정렬합니다.</li><li><code>space-between</code>: 여러 줄들 사이에 동일한 간격을 둡니다.</li><li><code>space-around</code>: 여러 줄들 주위에 동일한 간격을 둡니다.</li><li><code>stretch</code>: 여러 줄들을 컨테이너에 맞도록 늘립니다.</li></ul><p>이 속성을 사용하는 방법이 어려울 수 있습니다. <code>align-content</code>는 여러 줄들 사이의 간격을 지정하며, <code>align-items</code>는 컨테이너 안에서 어떻게 모든 요소들이 정렬하는지를 지정합니다. 한 줄만 있는 경우, <code>align-content</code>는 효과를 보이지 않습니다.</p>',
      lt:
        '<p>Varlytės pasiskirsčiusios po visą tvenkinį, bet lelijų lapai plūduriuoja tvenkinio viršuje. Galite nauoti <code>align-content</code>, kad nustatytumėte kokiais tarpais viena nuo kitos bus atskirtos kelios eilutės. Ši komanda reaguoja į šias vertes:</p><ul><li><code>flex-start</code>: Eilutės yra susitelkusios viršuje.</li><li><code>flex-end</code>: Eilutės yra susitelkusios apačioje.</li><li><code>center</code>: Eilutės yra vertikaliai susitelkusios viduryje.</li><li><code>space-between</code>: Eilutės yra paskirstomos taip, kad tarpai tarp jų būtų vienodi.</li><li><code>space-around</code>: Eilutės paskirstomos taip, kad tarpai aplink jas būtų vienodi.</li><li><code>stretch</code>: Eilutės yra ištempiamos, kad užpildytų supantį elementą.</li></ul><p>Tai gali būti painoka, bet <code>align-content</code> nustato tarpus tarp eilučių, o tuo tarpu <code>align-items</code> nustato kaip elementai kaip visuma yra lygiuojami juos supančiame elemente. Kai atvaizduojama tik viena eilutė, <code>align-content</code> neturi jokio poveikio.</p>',
      vi:
        '<p>Những chú ếch đang lan rộng trên cả ao, nhưng các lá bông súng đang chụm lại ở phía trên. Bạn có thể dùng <code>align-content</code> để thiết lập cách các dòng có khoảng cách xa nhau như thế nào. Những thuộc tính này có giá trị như sau:</p><ul><li><code>flex-start</code>: Các dòng được dồn về phía trên cùng của hộp chứa.</li><li><code>flex-end</code>: Các dòng được dồn về phía dưới cùng của hộp chứa.</li><li><code>center</code>: Các dòng được dồn về trung tâm của hộp chứa.</li><li><code>space-between</code>: Các dòng được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các dòng sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li><li><code>stretch</code>: Các dòng sẽ được kéo dài để phù hợp với hộp chứa.</li></ul><p>Điều này có thể gây nhầm lẫn, nhưng <code>align-content</code> xác định khoảng cách giữa các dòng, trong khi <code>align-items</code> xác định cách các hạng mục như một toàn thể được xếp trong hộp chứa. Khi chỉ có một dòng, <code>align-content</code> không có hiệu lực.</p>',
      pl:
        '<p>Żabki rozproszyły się po całym stawie ale listki upchnęły się u góry. Własność <code>align-content</code> pomoże ci ustalić odległość wierszy kontenera od siebie. Własność ta przyjmuje takie wartości:</p><ul><li><code>flex-start</code>: Wiersze upychają u góry kontenera.</li><li><code>flex-end</code>: Wiersze upychają się w dolnej części kontenera.</li><li><code>center</code>: Wiersze upychane są pośrodku kontenera.</li><li><code>space-between</code>: Wiersze wyświetlane są z równymi odstępami.</li><li><code>space-around</code>: Wiersze wyświetlane są z równymi odstępami dookoła.</li><li><code>stretch</code>: Wiersze rozszerzają się tak, aby dopasować się do kontenera.</li></ul><p>Może to być trochę pogmatwane ale <code>align-content</code> określa odstępy między wierszami podczas, gdy <code>align-items</code> określa jak elementy, jako całość, wyrównują się względem kontenera. W przypadku, gdy jest tylko jedna linia, <code>align-content</code> nie przynosi żadnego efektu.</p>',
      cs:
        '<p>Žabky se rozprostřely přes celý rybník, ale lekníny jsou všechny nahoře. K nastavení rozmístění řádků v kontejneru slouží <code>align-content</code>. Tato vlastnost má následující hodnoty:</p><ul><li><code>flex-start</code>: Hromadí řádky na horní straně kontejneru.</li><li><code>flex-end</code>: Hromadí řádky na spodní straně kontejneru.</li><li><code>center</code>: Hromadí řádky na svislém středu kontejneru.</li><li><code>space-between</code>: Rozmístí rovnoměrné mezery mezi řádky.</li><li><code>space-around</code>: Rozmístí rovnoměrné mezery kolem řádků.</li><li><code>stretch</code>: Roztáhne řádky, aby vyplnily kontejner.</li></ul><p>Může to být trochu matoucí, ale <code>align-content</code> určuje mezery mezi řádky, zatímco <code>align-items</code> určuje, jak jsou prvky jako celek zarovnány v kontejneru. Pokud je v kontejneru jen jeden řádek, <code>align-content</code> se neuplatní.</p>',
      ja:
        '<p>カエルたちが池いっぱいに広がっていますが、蓮の葉は上方に集まっています。複数の行が他の行とどう距離を取り広がるのかを指定するのに、<code>align-content</code>を使うことができます。このプロパティーは以下の値を取ります。</p><ul><li><code>flex-start</code>: 行はコンテナーの上側に詰められます。</li><li><code>flex-end</code>: 行はコンテナーの下側に詰められます。</li><li><code>center</code>: 行はコンテナーの中央に詰められます。</li><li><code>space-between</code>: 行はその間に等しい間隔を空けて表示されます。</li><li><code>space-around</code>: 行はその周囲に等しい間隔を空けて表示されます。</li><li><code>stretch</code>: 行はコンテナーに合うよう引き延ばされます。</li></ul><p>混乱したかもしれませんが、<code>align-content</code>は行間の余白を決めるもので、<code>align-items</code>はコンテナーに含まれるアイテム全体としての配置を決めるものです。一行だけの場合は<code>align-content</code>は何も効果がありません。</p>',
      hu:
        '<p>A békák szétszóródtak mindenfelé a tavon, míg a tündérrózsák a tó tetején gyülekeznek. Az <code>align-content</code> használatával beállíthatod, hogy több sor esetén a sorok milyen távolságokra legyenek egymástól. Ez a tulajdonság a következő értékeket veheti fel:</p><ul><li><code>flex-start</code>: A sorok a konténer tetejére rendeződnek.</li><li><code>flex-end</code>: A sorok a konténer aljához rendeződnek.</li><li><code>center</code>: A sorok a konténeren belül függőlegesen középre rendeződnek.</li><li><code>space-between</code>: A sorok közötti tér kiegyenlítetten oszlik el.</li><li><code>space-around</code>: A sorok körülötti tér egyenlően oszlik el.</li><li><code>stretch</code>: A sorok széthúzódnak, hogy kitöltsék a konténerüket.</li></ul><p>Talán kicsit megtévesztő, de az <code>align-content</code> a sorok közötti teret befolyásolja, míg az <code>align-items</code> meghatározza hogy az elemek összessége miképp igazodjon a konténeren belül. Amennyiben csak egyetlen sor van, az <code>align-content</code> nem fejt ki semmilyen hatást.</p>',
      eo:
        '<p>La ranoj disvastigas ĉien en la lageto, tamen la akvolilifolioj supren amasiĝas. Vi povas uzi <code>align-content</code> por precizigi kiel multoblaj linioj malproksimigatas unuajn la aliajn. Ĉi tiu trajto prenas la sekvajn valorojn:</p><ul><li><code>flex-start</code>: Linioj aranĝiĝas supren de la ujo.</li><li><code>flex-end</code>: Linioj aranĝiĝas malsupren de la ujo.</li><li><code>center</code>: Linioj aranĝiĝas al la vertikala centro de la ujo.</li><li><code>space-between</code>: Linioj afiŝas kun samaspacoj inter ili.</li><li><code>space-around</code>: Linioj afiŝas kun samaspacoj ĉirkaŭ ili.</li><li><code>stretch</code>: Linioj sterniĝas por ke ili laŭmezure taŭgu la ujon.</li></ul><p>Tiu ago povas esti konfuziganta, sed <code>align-content</code> determinas la spacojn inter linioj, dum <code>align-items</code> determinas kiel la tutaj elementoj kune liniiĝas interne de la ujo. Kiam estas nur unu linio, <code>align-content</code> nenion farus.</p>',
      sv:
        '<p>Grodorna är helt utspridda över dammen men blombladen är samlade i toppen. Man kan använda <code>align-content</code> för att sätta hur multipla rader placeras i förhållande till varandra. Denna attribut accepterar följande värden:</p><ul><li><code>flex-start</code>: Rader placeras i toppen av containern.</li><li><code>flex-end</code>: Rader placeras i bottena av containern.</li><li><code>center</code>: Rader placeras vertikalt i mitten av containern.</li><li><code>space-between</code>: Raderna får jämn fördelning av utrymmet mellan dem.</li><li><code>space-around</code>: Raderna får jämn fördelning av utrymmet runt dem.</li><li><code>stretch</code>: Raderna sträcks ut för att fylla containern.</li></ul><p>Detta kan vara förvirrande, men <code>align-content</code> definierar utrymmet mellan raderna medan <code>align-items</code> definerar hur objekt i sin helhet är placerade i själva containern. När det bara finns en rad har <code>align-content</code> ingen effekt.</p>',
      uk:
        '<p>Жабенята розповзлися по всьому ставку, а листя латаття знаходиться вгорі. Маєш скористатися властивістю <code>align-content</code>, щоб вказати як декілька рядків мають бути розташовані один до одного. Властивість набуває таких значень:</p><ul><li><code>flex-start</code>: Рядки буде розташовано вгорі контейнеру.</li><li><code>flex-end</code>: Рядки буде розташовано внизу контейнеру.</li><li><code>center</code>: Рядки групуються вертикально по центру контейнеру.</li><li><code>space-between</code>: Рядки розташовуються з однаковими проміжками навколо них.</li><li><code>space-around</code>: Рядки розташовуються з однаковими проміжками між ними.</li><li><code>stretch</code>: Рядки розтягуються заповнюючи контейнер рівномірно.</li></ul><p>Це може збивати з пантелику, але <code>align-content</code> визначає інтервал поміж рядками, в той час як <code>align-items</code> визначає, як елементи буде вирівняно в контейнері в цілому. Коли у вас лише один рядок,  <code>align-content</code> не має ніякого ефекту.</p>',
      hi:
        '<p>मेंढक पूरे तालाब के उपर फैले हुए हैं, परन्तु लिली के पत्ते तालाब के उपर की तरफ हैं। आप <code>align-content</code> की मदद से पंक्तियों के मध्य के अंतर को निश्चित कर सकते हैं। यह प्रॉपर्टी निम्न मान स्वीकार करती है:</p><ul><li><code>flex-start</code>: पंक्तियों को कंटेनर के शीर्ष में रखा जाता है।</li><li><code>flex-end</code>: पन्तियों को कंटेनर के अंत में रखा जाता है।</li><li><code>center</code>: पंक्तियों को कंटेनर के उर्ध्वाधर केंद्र में रखा जाता है।</li><li><code>space-between</code>: पंक्तियों के मध्य बराबर दूरी रखी जाती है।</li><li><code>space-around</code>: पंक्तियों के चारों ओर दूरी बराबर रखी जाती है।</li><li><code>stretch</code>: पंक्तियों को खीच कर कंटेनर के बराबर किया जाता है।</li></ul><p>यह भ्रामक प्रतीत होता है, परन्तु <code>align-content</code> पंक्तियों के अंतर को दर्शाता है जबकि <code>align-items</code> बताता है की किस तरह कोई वस्तु कंटेनर में संरेखित है। जब केवल एक ही पंक्ति मोजूद हो तो <code>align-content</code> का कोई प्रभाव नहीं होगा।</p>',
      sr:
        '<p>Жабице су раштркане по барици, док су локвањи груписани у врху. Можеш да користиш <code>align-content</code> да дефинишеш како су редови размакнути. Ово својство прихвата следеће вредности:</p><ul><li><code>flex-start</code>: Редови су груписани у горњем делу контејнера.</li><li><code>flex-end</code>: Редови су груписани у доњем делу котејнера.</li><li><code>center</code>: Редови су груписани у вертикалном центру контејнера.</li><li><code>space-between</code>: Редови су приказани са идентичним растојањем између редова.</li><li><code>space-around</code>: Редови су приказани са идентичним растојањем около редова.</li><li><code>stretch</code>: Редови су развучени да попуне контејнер.</li></ul><p>Можда збуњује али <code>align-content</code> дефинише размак између редова, док <code>align-items</code> дефинише како су елементи као целина (група) поравњати у контејнеру. Када постоји само један ред <code>align-content</code> нема ефекта.</p>',
      nl:
        '<p>De kikkers zijn over heel de vijver verspreidt, maar de lelieblaadjes zijn bovenaan gegroepeerd. Je kunt <code>align-content</code> gebruiken om te bepalen hoe de spatiëring tussen meerdere lijnen gebeurd. Deze eigenschap aanvaard de volgende waarden:</p><ul><li><code>flex-start</code>: Lijnen worden aan de bovenzijde van de container verpakt.</li><li><code>flex-end</code>: Lijnen worden aan de onderzijde van de container verpakt.</li><li><code>center</code>: Lijnen worden op het verticale center van de container verpakt.</li><li><code>space-between</code>: Lijnen worden gedistribueerd over de volledige dimensie en krijgen een gelijke spatiëring tussen elke lijn.</li><li><code>space-around</code>: Lijnen worden gedistribueerd over de volledige dimensie en krijgen een gelijke spatiëring rond elke lijn.</li><li><code>stretch</code>: Lijnen worden uitgerokken om in de container te passen.</li></ul><p>Dit kan verwarrend overkomen, maar <code>align-content</code> bepaald de spatiëring tussen lijnen, terwijl <code>align-items</code> de opstelling van alle items binnen de container bepaald. Als er slechts een lijn is, heeft <code>align-content</code> geen effect.</p>',
      ta:
        '<p>தவளைகள் குளத்தின் அனைத்து பகுதிகளிலும் சிதறியுள்ளன. ஆனால், இலைகள் ஒன்றாக மேற்புறம் ஒதுங்கியுள்ளன. <code>align-content</code> பயன்படுத்தி பல வரிகளுக்கு இடையேயுள்ள இடைவெளியை கட்டுப்படுத்தலாம். இந்த property பின்வரும் மதிப்புகளை ஏற்றுக்கொள்கிறது:</p><ul><li><code>flex-start</code>: Lines மேற்புறமாக சீரமைக்கப்படும்.</li><li><code>flex-end</code>:  Lines கீழ்புறமாக சீரமைக்கப்படும்.</li><li><code>center</code>:  Lines செங்குத்து மத்தியத்தில் சீரமைக்கப்படும்.</li><li><code>space-between</code>: Lines இடைவெளியில் சமமான இடைவெளி விடப்படும்.</li><li><code>space-around</code>: Lines சுற்றி சமமான இடைவெளி விடப்படும்.</li><li><code>stretch</code>:  Lines, container-ல் பொருந்தும் வண்ணம் நீட்டி சீரமைக்கப்படும்.</li></ul><p>இதில் ஒருவித குழப்பம் இருக்கலாம், <code>align-content</code> வரிகளுக்கு இடையேயுள்ள இடைவெளியை மட்டுமே கட்டுப்படுத்துகிறது. ஒரே ஒரு வரி மட்டும் இருக்கும் பொது <code>align-content</code> வேலை செய்யாது.</p>',
      ml:
        '<p>തവളകൾ മുഴുവൻ കുളങ്ങളിൽ പടർന്നു കിടക്കുന്നു, എന്നാൽ ലില്ലിപാഡുകൾ മുകളിലത്തെ നിലയിൽ വളരുന്നു. <code>align-content</code> ഉപയോഗിച്ച് ഓരോ നിരയെയും നീക്കി നിർത്താൻ സാധിക്കും. ഈ പ്രോപ്പർട്ടി ഇനിപ്പറയുന്ന മൂല്യങ്ങൾ സ്വീകരിക്കുന്നു:</p><ul><li><code>flex-start</code>: ലൈനുകൾ കണ്ടെയ്നർ മുകളിൽ കയറുന്നു.</li><li><code>flex-end</code>: പാറ്റേണുകളുടെ അടിയിൽ വരികൾ പായ്ക്ക് ചെയ്യപ്പെടുന്നു.</li><li><code>center</code>: ലൈനുകളുടെ ലംബമായ കേന്ദ്രത്തിൽ ലൈനുകൾ പൂരിപ്പിച്ചിരിക്കുന്നു.</li><li><code>space-between</code>: അവയ്ക്കിടയിൽ തുല്യ ഇടവേളകളോടെയാണ് രേഖകൾ കാണിക്കുന്നത്.</li><li><code>space-around</code>: ലൈനുകൾ അവയ്ക്ക് തുല്യമായ ഇടവേളകളിൽ കാണിക്കുന്നു.</li><li><code>stretch</code>: കണ്ടെയ്നറുകൾക്ക് അനുയോജ്യമാക്കാൻ ലൈനുകൾ വലിച്ചു.</li></ul><p>ഇത് ആശയക്കുഴപ്പത്തിലാക്കും, പക്ഷേ <code>align-content</code> വരികൾക്കിടയിൽ സ്പെയ്സിംഗ് നിശ്ചയിക്കുന്നു, <code>align-items</code> കണ്ടെയ്നറിൽ മുഴുവൻ ഇനങ്ങൾ എങ്ങനെ വിന്യസിക്കപ്പെട്ടിരിക്കുന്നു എന്ന് നിർണ്ണയിക്കുന്നു. ഒരു വഴി ഉള്ളപ്പോൾ , <code>align-content</code> എഫ്ഫക്റ്റ് ഉണ്ടാകില്ല.</p>',
      el:
        "<p>Οι βάτραχοι είναι διεσπαρμένοι σ' όλη την επιφάνεια της λιμνούλας, αλλά τα νούφαρα είναι μαζεμένα στο πάνω μέρος. Μπορείτε να χρησιμοποιήσετε το <code>align-content</code> για να ορίσετε πως πολλαπλές γραμμές χωρίζονται με διάστημα η μία από την άλλη. Αυτή η ιδιότητα παίρνει τις εξής αξίες:</p><ul><li><code>flex-start</code>: Οι γραμμές τοποθετούνται στο πάνω μέρος του container.</li><li><code>flex-end</code>: Οι γραμμές τοποθετούνται στο κάτω μέρος του container.</li><li><code>center</code>: Οι γραμμές τοποθετούνται στο κάθετο κέντρο του container.</li><li><code>space-between</code>: Οι γραμμές εμφανίζονται με ίσο διάστημα μεταξύ τους.</li><li><code>space-around</code>: Οι γραμμές εμφανίζονται με ίσο διάστημα γύρω τους.</li><li><code>stretch</code>: Οι γραμμές τεντώνονται για να ταιριάξουν στο container.</li></ul><p>Αυτό μπορεί να είναι συγχυστικό, αλλά το <code>align-content</code> καθορίζει το διάστημα μεταξύ γραμμών, ενώ το <code>align-items</code> καθορίζει πως τα αντικείμενα ως σύνολο ευθυγραμμίζονται μέσα στο container. Όταν υπάρχει μόνο μία γραμμή, το <code>align-content</code> δεν έχει επίδραση.</p>",
      mk:
        '<p>Жабите се распределени низ целото езерце, но листовите се во купче на горниот крај. Можете да користите <code>align-content</code> да поставите како множество на редови се разделени помеѓу себе. Ова својство ги прима следните вредности:</p><ul><li><code>flex-start</code>: Редовите се собрани на горниот крај од контејнерот.</li><li><code>flex-end</code>: Редовите се собрани на долниот крај од контејнерот.</li><li><code>center</code>: Редовите се собрани на вертикалниот центар на контејнерот.</li><li><code>space-between</code>: Редовите се појавуваат со еднакво растојание помеѓу себе.</li><li><code>space-around</code>: Редовите се појавуваат со еднакво растојаните околу себе.</li><li><code>stretch</code>: Редовите се истегнати да го пополнат контејнерот.</li></ul><p>Ова може да биде збунувачки, но <code>align-content</code> го определува растојанието помеѓу редови, додека <code>align-items</code> определува како сите елементи заедно се подредени во контејнерот. Кога има само еден ред, <code>align-content</code> нема ефект.</p>',
      uz:
        "<p>Somsalar xontaxta bo'yicha sochilib ketgan, lekin likoplar tepa qismida yig'ilgan. Siz <code>align-content</code> xususiyatidan qatorlarni bir-biriga nisbatan joylashishini boshqarish uchun foydalansangiz bo'ladi. Bu xususiyat quyidagi qiymatlarning biriga ega bo'ladi:</p><ul><li><code>flex-start</code> – qatorlar idishning tepasida to'planadi.</li><li><code>flex-end</code> – qatorlar idishning pastida to'planadi.</li><li><code>center</code> – qatorlar idishning o'rtasida to'planadi.</li><li><code>space-between</code> – qatorlar orasida teng masofa bilan joylanadi.</li><li><code>space-around</code> – qatorlar atrofida teng masofa bilan joylanadi.</li><li><code>stretch</code> – qatorlar idishning tik o'qi bo'yicha cho'ziladi.</li></ul><p>Bu chalkash tuyulish mumkin, lekin <code>align-content</code> qatorlar orasida masofani, va qator oladigan joyni belgilaydi, <code>align-items</code> esa buyumlarni qatorining chegarasiga nisbatan masofani belgilaydi. Faqat bitta qator bo'lsa <code>align-content</code> ishlamaydi.</p>"
    },
    board: 'ggggggggggggggg',
    classes: { '#xontaxta, #background': 'wrap' },
    style: { 'align-content': 'flex-start' },
    before: '#xontaxta {\n  display: flex;\n  flex-wrap: wrap;\n',
    after: '}'
  },
  {
    name: 'align-content 2',
    instructions: {
      en:
        '<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>',
      ro:
        '<p>Acum curentul a înghesuit nuferii în partea de jos. Folosește <code>align-content</code> pentru a ghida broaștele acolo.</p>',
      bg:
        '<p>Сега вятърът е скупчил листата в долната част. Използвай <code>align-content</code> да насочиш жабчетата натам.</p>',
      de:
        '<p>Der Strom hat die Seerosenbl&auml;tter nach unten getrieben. Benutze <code>align-content</code>, um die Fr&ouml;sche dorthin zu f&uuml;hren.</p>',
      'pt-br':
        '<p>Agora a correnteza agrupou as vitórias-régias no fundo. Use <code>align-content</code> para guiar os sapos até lá.</p>',
      es:
        '<p>Ahora, la corriente ha agrupado las hojas de lirio en la parte inferior. Usa <code>align-content</code> para guiar las ranas hasta allí.</p>',
      fr:
        "<p>Maintenant, le courant a amassé tous les nénuphars dans le bas de l'étang. Utilisez <code>align-content</code> pour guider les grenouilles vers le bas.</p>",
      ru:
        '<p>Теперь течение сгруппировало лилии в нижней части. Используй <code>align-content</code>, чтоб направить лягушат туда.</p>',
      fa:
        '<p>در حال حاضر نیلوفر های آبی به پایین برکه حرکت کرده اند. با استفاده از <code>align-content</code> قورباغه ها را هدایت کنید.</p>',
      'zh-cn':
        '<p>现在水流把荷叶都推到底部了。用<code>align-content</code>来指引青蛙到那里。</p>',
      'zh-tw':
        '<p>現在水流把荷葉都推到底部了。用<code>align-content</code>來指引青蛙到那裏。</p>',
      tr:
        '<p>Bu gölde nilüfer yaprakları aşağıda toplanmışlar. <code>align-content</code>kuralını kullanarak kurbağaları oraya yönlendirin.</p>',
      it:
        "<p>Ora la corrente ha trasportato le ninfee alla fine dello stagno. Guida li' le rane utilizzando <code>align-content</code>.</p>",
      ko:
        '<p>이제 연못의 조류에 의해 수련잎들이 연못의 아래쪽으로 떠내려 갔습니다. <code>align-content</code>를 사용하여 개구리들이 수련잎 위로 이동할 수 있도록 도와주세요.</p>',
      lt:
        '<p>Dabar srovė nunešė lelijos lapus į tvenkinio apačią. Naudodami <code>align-content</code> padėkite varlytėms pasiekti lelijas.</p>',
      vi:
        '<p>Hiện tại những lá bông súng ở phía dưới. Sử dụng <code>align-content</code> để hướng dẫn các chú ếch đến chỗ đó.</p>',
      pl:
        '<p>Tym razem listki odpłynęły na dół stawu. Przy pomocy <code>align-content</code> pomóż żabkom do nich dotrzeć.</p>',
      cs:
        '<p>Teď proud zanesl lekníny dolů. Pomozte žabkám vlastností <code>align-content</code>.</p>',
      ja:
        '<p>さて今回は蓮の葉は下へ詰められています。<code>align-content</code>を使って、カエルたちをそこまで導いてください。</p>',
      hu:
        '<p>Jelen esetben a tündérrózsák a tó alján csoportosulnak. Használd az <code>align-content</code> tulajdonságot, hogy a békákat odavezesd hozzájuk.</p>',
      eo:
        '<p>Nun la akvofluo amasigas la nimfeofoliojn je la fundo. Uzu <code>align-content</code> por gvidi la ranojn tien.</p>',
      sv:
        '<p>Nu har blombladen flyttat sig till botten. Använd <code>align-content</code> för att flytta grodorna dit.</p>',
      uk:
        '<p>Тепер течією віднесло листя латаття до нижнього краю. Скористайся <code>align-content</code>, щоб скерувати жабенят на листя.</p>',
      hi:
        '<p>अब लिली के पत्ते तालाब के अंत में आ गये हैं। <code>align-content</code> का इस्तेमाल कर मेंढकों को पत्तों तक पहुंचाइये।</p>',
      sr:
        '<p>Сада су локвањи груписани у дну. Користи <code>align-content</code> да помериш жабице.</p>',
      nl:
        '<p>Een sterke stroming heeft de lelieblaadjes helemaal naar beneden gestuwd. Gebruik <code>align-content</code> om de kikkers naar daar te brengen.</p>',
      ta:
        '<p><code>align-content</code> பயன்படுத்தி  தவளைகளுக்கு  வழி காட்டவும்.</p>',
      ml:
        '<p>തിര കാരണം താമര ഇലകൾ താഴേക്കു വന്നിരിക്കുന്നു. <code>align-content</code> ഉപയോഗിച്ച് തവളകളെ വഴി കാണിക്കുക.</p>',
      el:
        '<p>Τώρα το ρεύμα έχει μαζέψει τα νούφαρα στο κάτω μέρος. Χρησιμοποιήστε το <code>align-content</code> για να οδηγήσετε τους βατράχους εκεί.</p>',
      mk:
        '<p>Сега струјата ги има собрано листовите на долниот крај. Користете <code>align-content</code> да ги насочите жабите натаму.</p>',
      uz:
        '<p>Endi likoplar pastda turibdi. <code>align-content</code> xususiyatidan somsalarni pastga joylash uchun foydalaning.</p>'
    },
    board: 'ggggggggggggggg',
    classes: { '#xontaxta, #background': 'wrap' },
    style: { 'align-content': 'flex-end' },
    before: '#xontaxta {\n  display: flex;\n  flex-wrap: wrap;\n',
    after: '}'
  },
  {
    name: 'align-content 3',
    instructions: {
      en:
        '<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>',
      ro:
        '<p>Broaștele au avut o petrecere, dar este timpul să meargă acasă. Folosește o combinație de <code>flex-direction</code> și <code>align-content</code> pentru a le duce la nuferi.</p>',
      bg:
        '<p>Жабчетата са били на купон, но сега е време да се прибират вкъщи. Използвай комбинация от <code>flex-direction</code> и <code>align-content</code>, за да ги насочиш до техните листа.</p>',
      de:
        '<p>Die Fr&ouml;sche haben eine Party gefeiert, aber nun ist es Zeit, nach Hause zu gehen. Benutze eine Kombination von <code>flex-direction</code> und <code>align-content</code>, um sie zu ihren Seerosenbl&auml;ttern zu f&uuml;hren.</p>',
      'pt-br':
        '<p>Os sapos fizeram uma festa, mas é hora de ir para casa. Use uma combinação de <code>flex-direction</code> e <code>align-content</code> para levá-los até suas vitórias-régias.</p>',
      es:
        '<p>Las ranas han tenido una fiesta, pero es momento de volver a casa. Usa una combinación de <code>flex-direction</code> y <code>align-content</code> para llevarlas a sus hojas de lirio.</p>',
      fr:
        '<p>Les grenouilles ont fait la fête, mais elles doivent maintenant retourner à la maison. Utilisez une combinaison de <code>flex-direction</code> et <code>align-content</code> pour les ramener à leurs nénuphars.</p>',
      ru:
        '<p>Лягушата были на вечеринке, но уже пора возвращаться домой. Используй комбинацию <code>flex-direction</code> и <code>align-content</code>, чтоб отправить их к своим лилиям.</p>',
      fa:
        '<p>قورباغه ها یک مهمونی داشتند, اما الان دیگه زمان رفتن به خانه است. با استفاده از خاصیت های <code>flex-direction</code> و <code>align-content</code> کمک کنید به نیلوفر های آبی خود برسند.</p>',
      'zh-cn':
        '<p>青蛙们开完了派对，现在该回家了。用<code>flex-direction</code>和<code>align-content</code>的组合来把它们带回各自的家。</p>',
      'zh-tw':
        '<p>青蛙們開完了派對，現在該回家了。用<code>flex-direction</code>和<code>align-content</code>的組合來把它們帶回各自的家。</p>',
      tr:
        '<p>Kurbağalar partideler, ama eve dönme vakti geldi. <code>flex-direction</code> ve <code>align-content</code> kombinasyonunu kullanarak kurbağaları kendi nilüfer yapraklarına götürün.</p>',
      it:
        "<p>Le rane hanno fatto una grande festa ma adesso e' ora di tornare a casa. Usa  <code>flex-direction</code> e <code>align-content</code> per riportarle verso le ninfee.</p>",
      ko:
        '<p>개구리들이 신나는 파티를 가졌습니다. 이제는 집으로 돌아가야할 시간입니다. <code>flex-direction</code>과 <code>align-content</code>를 사용하여 개구리들이 자기 색깔과 같은 수련잎으로 돌아갈 수 있도록 도와주세요.</p>',
      lt:
        '<p>Varlytės surengė vakarėlį, tačiau jau laikas keliauti namo. Panaudokite <code>flex-direction</code> ir <code>align-content</code> kombinaciją, kad padėtumėte joms pasiekti savo lelijos lapus.</p>',
      vi:
        '<p>Những chú ếch đã có một bữa tiệc, nhưng đã đến lúc để về nhà. Kết hợp thuộc tính <code>flex-direction</code> và <code>align-content</code> để đưa chúng về với những lá bông súng.</p>',
      pl:
        '<p>Żabki zrobiły sobie imprezkę, nadszedł jednak czas na powrót do domu. Przy pomocy własności <code>flex-direction</code> oraz <code>align-content</code> pomóż im dotrzeć do ich listków.</p>',
      cs:
        '<p>Žabky oslavovaly, teď je však čas jít domů. Pomozte jim vlastnostmi <code>flex-direction</code> a <code>align-content</code>.</p>',
      ja:
        '<p>カエルたちはパーティーを開いていましたが、もう家に帰る時間です。<code>flex-direction</code>と<code>align-content</code>の組み合わせを使って、彼らの蓮の葉まで連れて行ってあげましょう。</p>',
      hu:
        '<p>A békák jót buliztak, de ideje hazamenniük. Használd együttesen a <code>flex-direction</code> és az <code>align-content</code> tulajdonságokat, hogy visszajuttasd őket a saját tündérrózsáikra.</p>',
      eo:
        '<p>La ranoj havis feston, sed nune ili devu reveni hejmen. Uzu kombinon de <code>flex-direction</code> kaj <code>align-content</code> por ke ili revenu al ilaj akvolilifolioj.</p>',
      sv:
        '<p>Det har varit grodfest men nu är det dags att gå hem. Använd en kombination av <code>flex-direction</code> och <code>align-content</code> för att flytta hem dom till sina blomblad.</p>',
      uk:
        '<p>Жабенята були на вечірці, але прийшов час повертатися додому. Скористайся комбінацією властивостей <code>flex-direction</code> та <code>align-content</code>, щоб розсадити їх на своє листя латаття.</p>',
      hi:
        '<p>मेंढकों के सामूहिक भोज के बाद अब वक्त है घर जाने का, <code>flex-direction</code> एवं <code>align-content</code> के इस्तेमाल से इन सभी को घर पहुंचाइये। </p>',
      sr:
        '<p>Жабице су имале журку а сада је време да се иде кући. Користи комбинацију <code>flex-direction</code> и <code>align-content</code> да их вратиш на њихове локвање.</p>',
      nl:
        '<p>De kikkers hebben een feestje gehad, maar nu is het tijd om naar huis te gaan. Maak gebruik van een combinatie van <code>flex-direction</code> en <code>align-content</code> om ze terug naar hun lelieblaadjes te brengen.</p>',
      ta:
        '<p><code>flex-direction</code> மற்றும் <code>align-content</code>  பயன்படுத்தி  தவளைகளுக்கு  வழி காட்டவும்.</p>',
      ml:
        '<p>തവളകൾ ഒരു പാർട്ടിക്കു പോയിരിക്കുക ആയിരുന്നു. പക്ഷെ ഇപ്പോൾ അവർക്കു തിരിച്ചു വീട്ടിൽ വരണം. <code>flex-direction</code> and <code>align-content</code> ഉപയോഗിച്ച് അവരെ താമര ഇലകളിലേക്കു എത്തിക്കു. </p>',
      el:
        '<p>Οι βάτραχοι έκαναν πάρτυ, αλλά ήρθε η ώρα να πάνε στα σπίτια τους. Χρησιμοποιήστε έναν συνδυασμό του <code>flex-direction</code> και του <code>align-content</code> για να τους πάτε στα νούφαρά τους.</p>',
      mk:
        '<p>Жабите имаа забава, но време е да си одат дома. Користете комбинација од <code>flex-direction</code> и <code>align-content</code> да ги доведете до нивните листови.</p>',
      uz:
        "<p>Somsalar issiq, qo'lingiz quyib qolmasin. Ularni o'z likoplariga joylash uchun <code>flex-direction</code> va <code>align-content</code> birikmasidan foydalaning.</p>"
    },
    board: 'rgggyrgggyrgggy',
    classes: { '#xontaxta, #background': 'wrap' },
    style: { 'flex-direction': 'column-reverse', 'align-content': 'center' },
    before: '#xontaxta {\n  display: flex;\n  flex-wrap: wrap;\n',
    after: '}'
  },
  {
    name: 'align-content 4',
    instructions: {
      en:
        '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      ro:
        '<p>Adu broaștele acasă pentru ultima oară folosind proprietățile învățate:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      bg:
        '<p>Закарай жабчетата вкъщи за последен път, използвайки CSS свойствата, които научи:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      de:
        '<p>Bringe die Fr&ouml;sche ein letztes Mal mit allen gelernten CSS-Eigenschaften nach Hause:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'pt-br':
        '<p>Leve os sapos para casa uma última vez utilizando as propriedades CSS que você aprendeu:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      es:
        '<p>Trae a las ranas a su casa una vez más usando las propiedades CSS que aprendiste:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      fr:
        '<p>Ramenez les grenouilles à la maison une dernière fois en utilisant les propriétés CSS que vous avez apprises&nbsp;:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      ru:
        '<p>Доставь лягушат по домам в последний раз, используя CSS свойства, которые ты выучил:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      fa:
        '<p>برای آخرین بار با استفاده از <span class="en-font">Css</span> به قورباغه ها کمک کنید تا به مقصد خود برسند. برای انجام این کار از خاصیت های زیر استفاده کنید :</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'zh-cn':
        '<p>用这些你所学的CSS属性，最后一次把青蛙们带回家:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'zh-tw':
        '<p>用這些你所學的CSS屬性，最後一次把青蛙們帶回家:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      tr:
        '<p>Öğrendiğiniz tüm CSS kurallarını kullanarak kurbağaları son kez evlerine götürün:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      it:
        "<p>Riporta a casa le rane un'ultima volta utilizzando le proprieta' CSS che hai imparato:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>",
      ko:
        '<p>지금까지 배운 CSS 속성들을 사용하여 개구리들이 집으로 돌아갈 수 있도록 한번 더 도와주세요:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      lt:
        '<p>Parveskite varlytes namo paskutinį kartą, naudojant CSS komandas, kurias išmokote:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      vi:
        '<p>Đưa những chú ếch về nhà một lần cuối cùng bằng cách sử dụng các thuộc tính CSS mà bạn đã học:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      pl:
        '<p>Zaprowadź żabki do domu ten ostatni raz używając własności CSS, które właśnie poznałeś:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      cs:
        '<p>Ještě jednou pomozte žabkám najít své lekníny CSS vlastnostmi, které jste se naučili:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      ja:
        '<p>これまでに習ったCSSプロパティーを使って、もう一度だけカエルたちを家まで連れていってあげてください。</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      hu:
        '<p>Vidd haza a békákat még egyszer utoljára azon CSS tulajdonságok segítségével, amelyeket eddig tanultál:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      eo:
        '<p>Revenigu la ranojn hejmen por lasta fojo uzante la CSS-ajn trajtojn kiujn vi lernis:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      sv:
        '<p>Hjälp grodorna en sista gång genom att använda alla attribut du har lärt dig:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      uk:
        '<p>Востаннє відправ жабенят додому використавши CSS-властивості, які ти вивчив:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      hi:
        '<p>आपने अभी तक जितना सीखा है उसकी मदद से एक आखिरी बार पत्तों तक पहुंचाइये। सभी प्रॉपर्टीज की सूची :</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="http://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      sr:
        '<p>Још једном за крај врати жабице кући користећи CSS својства која си научио/ла:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="http://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      nl:
        '<p>Je bent er bijna! Leidt de kikkers nog een laatste keer naar huis door gebruik te maken van de CSS eigenschappen die je zonet geleerd hebt:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="http://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      ta:
        '<p>இதுவரை நீங்கள் கற்றுக்கொண்ட அணைத்து CSS properties கொண்டு தவளைகளை அதன் இலையின் மீது அமர உதவவும்:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="http://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      ml:
        '<p>നിങ്ങൾ പഠിച്ച CSS പ്രോപ്പർട്ടികൾ ഉപയോഗിച്ച് ഒരു തവണ കൂടി തവളകളെ കൊണ്ടുവരിക:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      el:
        '<p>Φέρτε τους βατράχους στα σπίτια τους μια τελευταία φορά χρησιμοποιώντας τις ιδιότητες CSS που μάθατε:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      mk:
        '<p>Доведете ги жабите дома уште еден последен пат со користење на CSS својствата што ги научивте:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      uz:
        "<p>Siz o'rgangan CSS xususiyatlaridan foydalanib oxirgi marta somsalarni likoplariga joylang:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>"
    },
    board: 'rggggyy',
    style: {
      'flex-direction': 'column-reverse',
      'flex-wrap': 'wrap-reverse',
      'align-content': 'space-between',
      'justify-content': 'center'
    },
    before: '#xontaxta {\n  display: flex;\n',
    after: '}'
  }
]

var levelWin = {
  name: 'win',
  instructions: {
    en:
      '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="http://cssgridgarden.com/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also check out my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Want to keep learning while supporting Flexbox Froggy? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. And be sure to share Flexbox Froggy with your friends!</p>',
    ro:
      '<p>Ai câștigat! Mulțumită măiestriei tale în flexbox, ai reușit să ajuți toate broaștele să ajungă la nuferi. Uită-te cât de săltăreți sunt!</p><p>Dacă ți s-a părut amuzant, vizitează <a href="http://cssgridgarden.com/">Grid Garden</a> pentru a învăța o nouă proprietate CSS. Poți, de asemenea, să-mi vezi celelalte proiecte pe <a href="http://thomaspark.co">blog-ul meu</a> sau <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Vrei să înveți sprijinând Flexbox Froggy? Incearcă cursurile de web design și codare oferite de <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. Asigură-te că împarți Flexbox Froggy cu prietenii tăi!</p>',
    bg:
      '<p>Ти победи! Благодарение на майсторството ти с flexbox ти успя да помогнеш на всички жабчета да намерят своя дом!</p><p>Ако тази игра ти е харесала, те каня да видиш и другите ми проекти в моя <a href="http://thomaspark.co">блог</a> или <a href="http://twitter.com/thomashpark">Twitter</a>, и не забравяй да споделиш Flexbox Froggy със своите приятели!</p>',
    de:
      '<p>Gewonnen! Dank deines flexbox-K&ouml;nnens warst du in der Lage, alle Fr&ouml;sche zu ihrem Seerosenblatt zu f&uuml;hren. Sieh dir an wie gl&uuml;cklich sie sind!</p><p>Wenn dir das gefallen hat, schau dir meine anderen Projekte auf meinem <a href="http://thomaspark.co">Blog</a> oder <a href="http://twitter.com/thomashpark">Twitter</a> an, und teile Flexbox Froggy mit deinen Freunden!</p>',
    'pt-br':
      '<p>Você venceu! Graças à sua maestria de flexbox, você foi capaz de ajudar todos os sapos a chegar até suas vitórias-régias. Veja como eles estão felizes!</p><p>Se você achou isso coaxante, confira meus outros projetos no meu <a href="http://thomaspark.co">blog</a> ou <a href="http://twitter.com/thomashpark">Twitter</a>, e compartilhe Flexbox Froggy com seus amigos!</p>',
    es:
      '<p>¡Tú ganas! gracias a tu dominio de flexbox, fuiste capaz de ayudar a todas las ranas a ir a sus hojas de lirio. ¡Basta mirar lo felices que son!</p><p>Si te pareció divertido, revisa otros proyectos en mi <a href="http://thomaspark.co">blog</a> o <a href="http://twitter.com/thomashpark">Twitter</a> y asegúrate de compartir Flexbox Froggy con tus amigos.</p>',
    fr:
      '<p>Vous avez gagné! Grâce à votre maîtrise des flexbox, vous avez été capable d\'aider toutes les grenouilles à trouver leurs nénuphars. Regardez comment elles sautent de joie!</p><p>Si vous avez trouvé cela amusant, regardez mes autres projets sur mon <a href="http://thomaspark.co">blog</a> ou mon <a href="http://twitter.com/thomashpark">Twitter</a>, et assurez-vous de partager Flexbox Froggy avec vos amis!</p>',
    ru:
      '<p>Ты выиграл! Благодарим тебя за мастерство flexbox, ты смог помочь всем лягушатам добраться до их лилий. Просто взгляни, как они счастливы!</p><p>Если тебе понравилось, зацени мои другие проекты в моем <a href="http://thomaspark.co">блоге</a> или <a href="http://twitter.com/thomashpark">твитере</a>, и не забудь поделится этой игрой со своими друзьями!</p>',
    fa:
      '<p>شما برنده شدید! به همه قورباغه ها کمک کردید تا به نیلوفر های آبی خود برسند. آن ها خیلی خوشحال هستن و از شما تشکر می کنن!</p><p>برای مشاهده پروژه های دیگر از طریق <a href="http://thomaspark.co">وبلاگ</a> یا <a href="http://twitter.com/thomashpark">تویتتر</a> مرا دنبال کنید, و حتما بازی آموزش فلکس باکس توسط قورباغه را با دوستان خود به اشتراک بگذارید !</p>',
    'zh-cn':
      '<p>你赢了！正因为你对 flexbox 的了解，你帮助所有的青蛙回到了它们的荷叶上！看看它们跳得多开心！</p><p>如果你觉得这个网站很有趣，请务必到 <a href="http://cssgridgarden.com/">Grid Garden</a> 来学习 CSS 布局的另一个强大新功能。你也可以在我的<a href="http://thomaspark.co">部落格</a>或<a href="http://twitter.com/thomashpark">推特</a>上查看我的其他项目。</p><p>想要继续学习并支持 Flexbox Froggy 吗？请试试由 <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a> 所提供的一流网页设计和编码课程，而且记得和你的朋友们分享 Flexbox Froggy 哦！</p>',
    'zh-tw':
      '<p>你贏了！正因爲你對 flexbox 的了解，你幫助所有的青蛙回到了它們的荷葉上！看看它們跳得多開心！</p><p>如果你覺得這個網站很有趣，請務必到 <a href="http://cssgridgarden.com/">Grid Garden</a> 來學習 CSS 佈局的另一個強大新功能。你也可以在我的<a href="http://thomaspark.co">部落格</a>或<a href="http://twitter.com/thomashpark">推特</a>上查看我的其他專案。</p><p>想要繼續學習並支持 Flexbox Froggy 嗎？請試試由 <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a> 所提供的一流網頁設計和編碼課程，而且記得和你的朋友們分享 Flexbox Froggy 哦！</p>',
    tr:
      '<p>Kazandınız! Flexbox ustalığınız sayesinde bütün kurbağaları nilüfer yapraklarına götürebildik. Bakın, nekadar da mutlular!</p><p>Eğer bunu beğendiyseniz, diğer projelerime <a href="http://thomaspark.co">blog</a> ya da <a href="http://twitter.com/thomashpark">Twitter</a> adreslerinden göz gezdirin, ve Flexbox Froggy oyununu arkadaşlarınızla paylaşın!</p>',
    it:
      '<p>Hai vinto! Grazie alla tua conoscenza di flexbox sei riuscito ad aiutare tutte le rane a trovare la loro ninfea. Guarda come sono felici ora!</p><p>Se hai trovato questo gioco interessante, visita il mio <a href="http://thomaspark.co">blog</a> o il profilo  <a href="http://twitter.com/thomashpark">Twitter</a> per aggiornamenti sugli altri miei progetti. Non dimenticare di condividere Flexbox Froggy con i tuoi amici!</p>',
    ko:
      '<p>해냈습니다! 당신의 능숙한 Flexbox 솜씨 덕분에 모든 개구리들이 수련잎 위로 돌아가는 것을 도울 수 있었습니다. Froggy와 친구들이 기뻐하고 있군요!</p><p>이 게임이 마음에 드셨다면 이곳에서 제 다른 프로젝트들을 확인해보세요: <a href="http://thomaspark.co">blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a> 친구들과 함께 Flexbox Froggy를 즐기는 것도 잊지 마시고요!</p>',
    lt:
      '<p>Jūs laimėjote! Jūsų įvaldyto "flexbox" metodo dėka, sėkmingai pagelbėjote visoms varlytems pasiekti savo lelijos lapus. Tik pažiūrėkite kaip jos šokinėja iš džiaugsmo!</p><p>Jei manote, kad šios pamokos Jums buvo naudingos, užmeskite akį į kitus mano projektus mano <a href="http://thomaspark.co">dienoraštyje</a> ar <a href="http://twitter.com/thomashpark">Twitter</a> paskyroje ir būtinai pasidalinkite "Flexbox Froggy" su draugais!</p>',
    vi:
      '<p>Chiến thắng! Nhờ sự thành thạo flexbox của bạn, bạn đã giúp tất cả các chú ếch trở về với những lá bông súng của chúng. Nhìn xem chúng hạnh phúc biết bao nhiêu!</p><p>Nếu bạn thấy dự án này lôi cuốn, hãy xem các dự án khác của tôi trên <a href="http://thomaspark.co">blog</a> hoặc là <a href="http://twitter.com/thomashpark">Twitter</a>, và hãy chia sẻ Flexbox Froggy với bạn bè!</p>',
    pl:
      '<p>Wygrałeś! Dzięki twemu mistrzostwu w obsłudze flexboxa mogłeś pomóc wszystkim żabkom dotrzeć do swoich listków. Popatrz tylko jakie są szczęśliwe!</p><p>Jeśli spodobała ci się gra obczaj inne moje projekty na moim <a href="http://thomaspark.co">blogu</a> lub koncie <a href="http://twitter.com/thomashpark">Twittera</a>, a także podziel się Flexbox Froggy z przyjaciółmi!</p>',
    cs:
      '<p>Vyhráli jste! Svým mistrovským použitím flexboxu jste pomohli všem žabkám najít své lekníny. Podívejte, jak jsou šťastné!</p><p>Jestli se vám hra líbila, podívejte se i na mé další projekty na mém <a href="http://thomaspark.co">blogu</a> nebo na <a href="http://twitter.com/thomashpark">Twitteru</a>, a podělte se o radost z Flexbox Froggy s kamarády!</p>',
    ja:
      '<p>やりました！　flexboxを使いこなしてくれてありがとう。カエルたちをちゃんと蓮の葉まで連れて行ってくれました。ほら、すごく嬉しそうにしてますよ！</p><p>楽しんでくれたのなら、<a href="http://thomaspark.co">ブログ</a>や<a href="http://twitter.com/thomashpark">Twitter</a>で私の他のプロジェクトも探してみてください。Flexbox Froggyをお友達にシェアするのもお忘れなく！</p>',
    hu:
      '<p>Nyertél! A flexbox szakértelmednek köszönhetően minden békát sikeresen hazajuttattál a tündérrózsájára. Nézd csak, hogy ugrálnak örömükben!</p><p>Ha eljutottál eddig a brekegésig, nézz rá további munkáimra a <a href="http://thomaspark.co">blogomon</a> vagy a <a href="http://twitter.com/thomashpark">Twitteren</a>, és feltétlenül oszd meg a Flexbox Froggy-t a barátaiddal!</p>',
    eo:
      '<p>Vi gajnas! Dank\'al via majstreco de flexbox, vi ja kapablis helpi ĉiujn ranojn reveni al iliaj akvolilifolioj. Rigardu kiel ili saltas pro ĝojeco!</p><p>Se vi trovis amuzanta tiun ludon, bonvolu rigardi aliajn projektojn miajn je mia <a href="http://thomaspark.co">blogo</a> aŭ <a href="http://twitter.com/thomashpark">Twitter</a>, kaj bonvolu disdoni Flexbox Froggy-on al tutaj amikoj viaj!</p>',
    sv:
      '<p>Grattis, du vann! Tack vare dina mästarkunskaper kring flexbox lyckades du hjälpa alla grodorna till sina blomblad. Se bara hur glada dom är!</p><p>Om du tyckte detta var spännande, spana in mina övriga projekt på min <a href="http://thomaspark.co">blogg</a> eller <a href="http://twitter.com/thomashpark">Twitter</a> och dela gärna Flexbox Froggy med dina vänner!</p>',
    uk:
      '<p>Ти виграв! Завдяки твоїй майстерності з flexbox, ти зміг допомогти всім жабенятам дістатися до їх листів латаття. Лиш подивись які вони щасливі!</p><p>Якщо ця гра тобі сподобалась, переглянь мої інші проекти у <a href="http://thomaspark.co">блозі</a> або <a href="http://twitter.com/thomashpark">Твітері</a>, й не забудь поділитися грою Flexbox Froggy зі своїми друзями!</p>',
    hi:
      '<p>आप जीत गये! धन्यवाद flexbox में प्रभुत्व प्राप्त करने के लिए, आप सभी मेंढकों को उनके लिली के पत्तों तक पहुँचाने में सफल रहे। एक बार देखिये कितने खुश हैं वे सब।</p><p>अगर आपको यह खेल पसंद आया तो आप मेरी अन्य योजनाओं को मेरे <a href="http://thomaspark.co">blog</a> एवं <a href="http://twitter.com/thomashpark">Twitter</a> पर देख सकते हैं। इस खेल को अपने अन्य दोस्तों में बांटना न भूलें, उन्हें भी मदद करें flexbox में महारत हासिल करने में।</p>',
    sr:
      '<p>Победио/ла си! Захваљујући одличном познавању флексбокса, могао/ла си да помогнеш жабицама да стигну до својих локвања. Погледај само како су сретне!</p><p>Ако си уживао/ла, овери и моје пројекте на <a href="http://thomaspark.co">блогу</a> или <a href="http://twitter.com/thomashpark">Твитеру</a> и обавезно подели Flexbox Froggy са својим пријатељима!</p>',
    nl:
      '<p>Gewonnen! Dankzij je beheersing van flexbox was je in staat om alle kikkers te helpen hun lelieblaadjes te bereiken. Kijk eens hoe gelukkig ze zijn!</p><p>Indien je dit al leuk vond, geef dan eens een kijkje naar mijn andere projecten op mijn <a href="http://thomaspark.co">blog</a> of <a href="http://twitter.com/thomashpark">Twitter</a>, en vergeet niet Flexbox Froggy te delen met je vrienden!</p>',
    ta:
      '<p>வெற்றி! வெற்றி!! Flexbox-ல்  உங்கள் தேர்ச்சிக்கு நன்றி, தவளைகள்  அதன் இலைகளை அடைய நீங்கள் செய்த உதவிக்கு மிக்க நன்றி.  . தற்போது தவளைகள் தான் எவ்வளவு சந்தோஷமாக இருக்கின்றன!',
    ml:
      '<p>നിങ്ങൾ ജയിച്ചിരിക്കുന്നു! ഫ്ലസ്‌ബോസ് പേടിച്ചു കൊണ്ട് നിങ്ങൾ അല്ല താവളകളെയും ലക്ഷ്യസ്ഥാനത്തു എത്തിച്ചിരിക്കുന്നു. !</p><p>ഇത് ഇഷ്ടപ്പെട്ടു എങ്കിൽ, കൂടുതൽ പഠിക്കാൻ സന്ദർശിക്കു <a href="http://cssgridgarden.com/">Grid Garden</a> ചെക്ക് ഔട്ട് <a href="http://thomaspark.co">my blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Flexbox Froggy- നെ പിന്തുണയ്ക്കുന്ന സമയത്ത് പഠിക്കുന്നത് തുടരണോ? നല്കിയ ടോപ്പ്നോട്ട് വെബ് ഡിസൈനും കോഡിംഗ് കോഴ്സും സന്ദർശിക്കുക <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. നിങ്ങളുടെ സുഹൃത്തുക്കളുമായി Flexbox Froggy പങ്കിടുമെന്ന് ഉറപ്പാക്കുക!</p>',
    el:
      '<p>Νικήσατε! Χάρη στην γνώση σας του flexbox, μπορέσατε να βοηθήσετε όλους τους βατράχους να πάνε στα νούφαρά τους. Κοιτάξτε πόσο χοροπηδηχτοί είναι!</p><p>Αν το βρήκατε αυτό συναρπαστικό, επισκεφτείτε το <a href="http://cssgridgarden.com/">Grid Garden</a> για να μάθετε για ένα άλλο ισχυρό νέο χαρακτηριστικό της διάταξης CSS. Μπορείτε επίσης να ελέγξετε τα άλλα έργα μου στο <a href="http://thomaspark.co">blog μου</a> ή στο <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Θέλετε να συνεχίσετε να μαθαίνετε υποστηρίζοντας το Flexbox Froggy; Δοκιμάστε τα εξαιρετικά μαθήματα web design και προγραμματισμού που προσφέρονται από το <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. Και μοιραστείτε το Flexbox Froggy με τους φίλους σας!</p>',
    mk:
      '<p>Победивте! Благодарение на вашето мајсторство со flexbox, можевте да им помогнете на сите жаби да стигнат до своите листови. Само погледнете колку се среќни!</p><p>Доколку ви беше возбудливо, ве покануваме да го посетите <a href="http://cssgridgarden.com/">Grid Garden</a> да научите за уште моќна функција за CSS распоредување. Исто така можете и да ги погледнете моите други проекти на <a href="http://thomaspark.co">мојот блог</a> или <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Сакате да продолжите со учење додека и го поддржувате Flexbox Froggy? Пробајте ги курсевите за веб дизајн и кодирање од <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. И не заборавајте да го споделите Flexbox Froggy со вашите пријатели!</p>',
    uz:
      "<p>Yashang, siz yutdingiz! Endi mazza qilib o'zingiz shu somsalarni yesangiz bo'ladi!</p>"
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: { '#xontaxta, #background': 'wrap' },
  style: {},
  before: '#xontaxta {\n  display: flex;\n',
  after: '}'
}
