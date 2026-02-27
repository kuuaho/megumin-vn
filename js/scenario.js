/* ============================================
   Scenario Data — 全10話
   ============================================ */

// Scene types: 'dialogue', 'narration', 'choice'
// bg: CSS class for background
// char: character expression (null = hide, 'normal','blush','happy','serious','proud')
// effect: 'explosion','shake','hearts', null
// speaker: name string or null for narration

const CHAPTERS = [
    // ===== 第一話 赤い瞳の少女 =====
    {
        id: 0, title: '赤い瞳の少女', number: '第一話',
        desc: '森で出会った爆裂魔法の少女',
        scenes: [
            { bg: 'bg-forest', char: null, speaker: null, text: '静かな森の小道を歩いていると、突如として夜空を裂く閃光が走った。' },
            { bg: 'bg-forest', char: null, speaker: null, text: '轟音が大地を揺らし、木々の葉がざわめき、鳥たちが一斉に飛び立つ。', effect: 'shake' },
            { bg: 'bg-forest', char: null, speaker: 'kuu', text: 'な、なんだ今の爆発……？' },
            { bg: 'bg-forest', char: null, speaker: null, text: '煙が上がる方へ駆け出す。焦げた匂いが漂い、地面には巨大なクレーターが口を開けていた。' },
            { bg: 'bg-forest', char: 'normal', speaker: null, text: 'その中心に、黒い帽子とマントを纏った小柄な少女が膝をついている。彼女は大きな杖を握りしめ、肩で荒く息をしていた。' },
            { bg: 'bg-forest', char: 'proud', charImg: 'images/characters/1.png', speaker: 'めぐみん', text: '……ふふ……これぞ、我が渾身の爆裂魔法……エクスプロージョン！' },
            { bg: 'bg-forest', char: null, speaker: null, text: '声は疲れているのに、誇らしげに胸を張る。まるで勝利を掲げる英雄のようだった。次の瞬間、少女の身体が傾き——' },
            { bg: 'bg-forest', char: 'normal', speaker: 'kuu', text: 'お、おい！大丈夫か？' },
            { bg: 'bg-forest', char: 'blush', speaker: null, text: '触れられた少女は一瞬だけ頬を赤らめ、その紅い瞳を煌めかせた。' },
            { bg: 'bg-forest', char: 'proud', speaker: 'めぐみん', text: 'ふふん……案ずることはない。我が名はめぐみん！紅魔族が誇る大魔法使いにして、アークウィザードをなりわいとする者！' },
            { bg: 'bg-forest', char: null, speaker: 'kuu', text: 'え、えっと……めぐみん？' },
            { bg: 'bg-forest', char: 'serious', speaker: 'めぐみん', text: '変な名前とは失礼な！我が名は誇り高きものだ。……まあ、街の人間の方がよほど変わった名をしているのだがな。' },
            { bg: 'bg-forest', char: 'proud', speaker: 'めぐみん', text: '最強にして究極の攻撃魔法——爆裂魔法を操る者、それが我！この一撃のために、全魔力を注ぎ込み、全てを賭す。だからこそ、これほどの壮麗なる爆発が生まれるのだ！' },
            {
                type: 'choice', text: '彼女の言葉にどう反応する？', choices: [
                    { text: '……すごいな、本当に', affection: 3 },
                    { text: 'いや、危なすぎるだろ……', affection: 1 },
                    { text: 'もっと聞かせてくれ！', affection: 5 }
                ]
            },
            { bg: 'bg-forest', char: 'proud', speaker: 'めぐみん', text: 'ふふん、もっと称えるがいい！爆裂魔法を愛し、爆裂魔法のためだけに生きる者など、この世にそう多くはないのだからな！' },
            { bg: 'bg-forest', char: 'normal', speaker: null, text: 'しかし、威勢よく笑った直後、めぐみんの身体は再び崩れそうになる。' },
            { bg: 'bg-forest', char: null, speaker: 'kuu', text: 'お、おい！やっぱり限界だろ！' },
            { bg: 'bg-forest', char: 'blush', speaker: 'めぐみん', text: '……むぅ。そう、我が奥義の代償は大きい。要約すると——身動きひとつ取れぬ、ということだ。' },
            { bg: 'bg-forest', char: null, speaker: 'kuu', text: '要約になってないだろ！' },
            { bg: 'bg-forest', char: 'proud', speaker: 'めぐみん', text: 'だからこそ、そなたが我を支えるのだ。……さあ、肩を貸すがよい！' },
            { bg: 'bg-forest', char: null, speaker: 'kuu', text: 'いや、言い方逆だから！' },
            { bg: 'bg-forest', char: 'happy', speaker: null, text: '思わずツッコミを入れつつも、俺は彼女を支える。めぐみんは満足げに目を細め、小さく頷く。その仕草はどこか無邪気だった。' },
            // 焚き火シーン
            { bg: 'bg-forest', char: null, speaker: null, text: '小さな焚き火を起こし、俺は携帯していた干し肉と固いパンを炙った。めぐみんは膝掛けにくるまり、鼻をくんくんさせる。' },
            { bg: 'bg-forest', char: 'happy', speaker: 'めぐみん', text: '……良い匂いです。献上せよ。' },
            { bg: 'bg-forest', char: null, speaker: 'kuu', text: '言い方よ。' },
            {
                type: 'choice', text: '食事をどう渡す？', choices: [
                    { text: '一口サイズにちぎって優しく差し出す', affection: 5 },
                    { text: 'パンをまるごと渡す', affection: 2 },
                    { text: '「先に名前で呼んでくれたらな」と冗談を言う', affection: 3 }
                ]
            },
            { bg: 'bg-forest', char: 'blush', speaker: null, text: '頬張るたびに紅い瞳がとろんと緩む。けど俺の指が少し触れると、ぱっと色が濃くなる。' },
            { bg: 'bg-forest', char: null, speaker: 'kuu', text: '照れてない？' },
            { bg: 'bg-forest', char: 'blush', speaker: 'めぐみん', text: '湯気だ。焚き火の。たぶん。' },
            { bg: 'bg-forest', char: 'happy', speaker: 'めぐみん', text: '……kuu。そなた、紳士だな。よかろう、明日から我が随伴者に任ずる。' },
            { bg: 'bg-forest', char: null, speaker: 'kuu', text: '勝手に任命すんな。' },
            { bg: 'bg-forest', char: null, speaker: null, text: 'でも、その声色が少しだけ安心しているのを、焚き火の音が教えてくれた。' },
            { bg: 'bg-forest', char: 'happy', speaker: null, text: 'こうして、俺と紅魔族の少女——めぐみんとの物語が始まったのだった。' },
        ]
    },

    // ===== 第二話 エクスプロージョン =====
    {
        id: 1, title: 'エクスプロージョン', number: '第二話',
        desc: '毎日の爆裂魔法、その情熱と覚悟',
        scenes: [
            { bg: 'bg-grassland', char: null, speaker: null, text: '翌朝。俺は宿の近くの草原で、めぐみんと並んで立っていた。' },
            { bg: 'bg-grassland', char: null, speaker: 'kuu', text: '……それで、なんで俺まで付き合わされてるんだ？' },
            { bg: 'bg-grassland', char: 'proud', speaker: 'めぐみん', text: 'ふふん、決まっているだろう。爆裂魔法は日に一度撃たねば気が済まない。これは紅魔族の掟……いえ、私の生きる道なのだ！' },
            { bg: 'bg-grassland', char: null, speaker: 'kuu', text: '別に毎日撃たなくても死なないだろ。' },
            { bg: 'bg-grassland', char: 'serious', speaker: 'めぐみん', text: 'いいえ、死にます！　紅魔族は日に一度、爆裂魔法を放たねば魂が渇き、枯れてしまうのです！' },
            { bg: 'bg-grassland', char: 'serious', speaker: 'めぐみん', text: '見せてあげましょう、kuu！　これが人類最大の威力を誇る攻撃手段——究極の攻撃魔法！' },
            { bg: 'bg-grassland', char: 'serious', speaker: 'めぐみん', text: 'エクスプロージョン！！！', effect: 'explosion' },
            { bg: 'bg-grassland', char: null, speaker: null, text: '轟音と共に大地が裂け、光の奔流が遠くの岩山を飲み込んだ。爆風が頬を叩き、視界が白く染まる。', effect: 'shake' },
            { bg: 'bg-grassland', char: null, speaker: 'kuu', text: 'な、なんて威力だ……！' },
            { bg: 'bg-grassland', char: 'happy', speaker: null, text: 'だが、隣に立っていたはずのめぐみんが、もう地面にぺたりと座り込んでいる。' },
            { bg: 'bg-grassland', char: 'proud', charImg: 'images/characters/2.png', speaker: 'めぐみん', text: '……我が奥義である爆裂魔法は、その絶大な威力ゆえ、消費魔力もまた絶大……要約すると、身動きひとつ取れません……' },
            { bg: 'bg-grassland', char: null, speaker: 'kuu', text: 'いや、それ致命的すぎないか！？' },
            { bg: 'bg-grassland', char: 'proud', speaker: 'めぐみん', text: '私は爆裂魔法をこよなく愛するアークウィザード。爆発系統の魔法が好きなのではない……爆裂魔法だけが好きなのです！' },
            {
                type: 'choice', text: 'めぐみんの情熱にどう応える？', choices: [
                    { text: 'お前、本当に爆裂魔法バカだな（笑いながら）', affection: 3 },
                    { text: 'その覚悟、カッコいいと思う', affection: 5 },
                    { text: 'もう少し実用的な魔法も覚えたら？', affection: 1 }
                ]
            },
            { bg: 'bg-grassland', char: 'proud', speaker: 'めぐみん', text: 'ふふん、褒め言葉と受け取っておこう。さあkuu！　そなたも我と共に爆裂道を歩むのだ！' },
            { bg: 'bg-grassland', char: null, speaker: 'kuu', text: 'いや、俺は遠慮しとく！' },
            // 朝市シーン
            { bg: 'bg-market', char: null, speaker: null, text: '宿に戻る途中、朝市が立っていた。焼きたてのパンとハーブの香りが漂い、俺たちはつい立ち寄る。' },
            { bg: 'bg-market', char: 'happy', speaker: 'めぐみん', text: 'kuu、この香草スープ……魔力回復に効くかも！' },
            { bg: 'bg-market', char: null, speaker: 'kuu', text: '気のせいだと思うけどな。' },
            {
                type: 'choice', text: 'スープをどう食べる？', choices: [
                    { text: 'パンを半分に割り、浸して一緒に食べる', affection: 5 },
                    { text: '別々に食べる', affection: 1 },
                    { text: 'めぐみんの分も多めに買ってやる', affection: 3 }
                ]
            },
            { bg: 'bg-market', char: 'blush', speaker: 'めぐみん', text: '……美味。これも爆裂級の幸福です。' },
            { bg: 'bg-market', char: 'normal', speaker: null, text: '笑いながら食後のストレッチをする。彼女は杖を肩に回しながら、「そなたの背筋、悪い」と真剣に注意してきた。' },
            { bg: 'bg-market', char: 'happy', speaker: null, text: '朝の光の中、彼女の紅い瞳が少し柔らかく見えた。' },
        ]
    },

    // ===== 第三話 ぬるぬるスライム =====
    {
        id: 2, title: 'ぬるぬるスライム', number: '第三話',
        desc: '思わぬ敵との遭遇、深まる絆',
        scenes: [
            { bg: 'bg-river', char: null, speaker: null, text: '森を抜けた先の小川で、俺とめぐみんは思わぬ敵と遭遇した。——スライム。' },
            { bg: 'bg-river', char: 'serious', speaker: 'めぐみん', text: 'ぬぅ……よりにもよって、スライムとは……！' },
            { bg: 'bg-river', char: null, speaker: null, text: 'めぐみんは悔しそうに唇を噛む。爆裂魔法を撃ったばかりで、いまは完全に動けない状態だ。' },
            { bg: 'bg-river', char: null, speaker: 'kuu', text: 'いや、スライムくらいなら俺でも倒せるだろ。任せてろ。' },
            { bg: 'bg-river', char: null, speaker: null, text: 'そう言って剣を構えるが、スライムは想像以上に素早かった。ぬるりと伸びる体が俺の足に絡みつく。' },
            { bg: 'bg-river', char: null, speaker: 'kuu', text: 'うわっ！？　な、なんだこれ、冷たっ！' },
            { bg: 'bg-river', char: 'serious', speaker: 'めぐみん', text: 'くっ……kuu！　行かせませんよ！　一人でスッキリするなど許しません！　我らは仲間ではないですか！' },
            { bg: 'bg-river', char: null, speaker: 'kuu', text: 'いや、これ仲間とか関係ない状況だろ！' },
            {
                type: 'choice', text: 'スライムとの戦い方は？', choices: [
                    { text: '力任せに剣を振り下ろす', affection: 2 },
                    { text: '冷静に弱点を見極めてから攻撃', affection: 3 },
                    { text: 'めぐみんを守りながら慎重に戦う', affection: 5 }
                ]
            },
            { bg: 'bg-river', char: null, speaker: null, text: '剣を振り下ろすと、スライムはようやく形を崩し、ぶしゅっと水音を立てて消えた。' },
            { bg: 'bg-river', char: null, speaker: 'kuu', text: 'ふぅ……倒したぞ。' },
            { bg: 'bg-river', char: 'proud', speaker: 'めぐみん', text: '……ふふん、まあ当然ですね。kuuが私の仲間なのですから。' },
            { bg: 'bg-river', char: null, speaker: 'kuu', text: 'お前は何もしてないだろ！' },
            { bg: 'bg-river', char: 'proud', speaker: 'めぐみん', text: '違いますよ、精神的支柱となったのです。私がいなければ、そなたは心折れていたでしょう！' },
            { bg: 'bg-river', char: null, speaker: 'kuu', text: '強引すぎる理屈だな！' },
            // 川辺の休憩
            { bg: 'bg-river', char: null, speaker: null, text: '川辺で泥と粘液を落とすことにした。俺が桶で水をかけると、めぐみんは「冷たい！」と悲鳴を上げる。' },
            { bg: 'bg-river', char: 'normal', speaker: 'めぐみん', text: 'まったく……ぬるぬるの戦後処理とは、情けない戦士よ。' },
            { bg: 'bg-river', char: null, speaker: 'kuu', text: 'その原因が誰かは言わないでおくよ。' },
            { bg: 'bg-river', char: 'blush', speaker: 'めぐみん', text: 'kuu、我ら……意外と絵になりますね。' },
            {
                type: 'choice', text: 'どう返す？', choices: [
                    { text: 'スライムの粘液付きで言うセリフか、それ', affection: 3 },
                    { text: 'ああ、そうだな（素直に微笑む）', affection: 5 },
                    { text: '照れるなって', affection: 2 }
                ]
            },
            { bg: 'bg-river', char: 'happy', charImg: 'images/characters/3.png', speaker: null, text: 'それでも彼女の笑い声は、透明な水音のように心地よく響いた。' },
        ]
    },

    // ===== 第四話 温泉 =====
    {
        id: 3, title: '温泉', number: '第四話',
        desc: '湯けむりの中で交わす本音',
        scenes: [
            { bg: 'bg-onsen', char: null, speaker: null, text: 'スライムとの戦いを終えた俺たちは、町外れの山中にある温泉宿へとたどり着いた。' },
            { bg: 'bg-onsen', char: 'happy', speaker: 'めぐみん', text: 'ふふん……なんという絶好のシチュエーション。kuuよ、感謝します。深く感謝しますよ！' },
            { bg: 'bg-onsen', char: null, speaker: 'kuu', text: '何が感謝だよ。ただ風呂に入りに来ただけだろ。' },
            { bg: 'bg-onsen', char: 'proud', speaker: 'めぐみん', text: '見よ、この白き湯煙……まるで異界の結界のようだ。今こそ我が魔力を癒やし、次なる爆裂へと備える時！' },
            { bg: 'bg-onsen', char: null, speaker: 'kuu', text: 'いや、リラックスするだけでいいんだって……' },
            { bg: 'bg-onsen', char: 'happy', speaker: 'めぐみん', text: '……最高、です……ナイス爆裂……' },
            { bg: 'bg-onsen', char: null, speaker: 'kuu', text: '風呂にまで爆裂を持ち込むなよ！' },
            { bg: 'bg-onsen', char: 'serious', charImg: 'images/characters/4.png', speaker: 'めぐみん', text: '爆裂魔法は私の全て。湯の中であろうと、その情熱は消えぬのです！' },
            { bg: 'bg-onsen', char: null, speaker: null, text: '互いに笑い合う中、ふと沈黙が訪れる。夜空には星が広がり、湯けむり越しに瞬いていた。' },
            { bg: 'bg-onsen', char: 'blush', speaker: 'めぐみん', text: '……kuu。私は爆裂魔法しか使えない。便利な魔法も、戦いを助ける術も持っていない。それでも……そなたは、私と一緒にいてくれるのですか？' },
            { bg: 'bg-onsen', char: null, speaker: null, text: 'その声には、いつもの誇張も中二めいた調子もなかった。素の彼女が不安を吐き出しているのが分かる。' },
            {
                type: 'choice', text: 'めぐみんの不安にどう答える？', choices: [
                    { text: 'もちろんだ。お前が爆裂魔法しか使えなくても、俺には十分すぎるほどすごい', affection: 5 },
                    { text: 'まあ、面白いからいいんじゃないか', affection: 2 },
                    { text: '爆裂魔法が使えるだけで最強だろ', affection: 3 }
                ]
            },
            { bg: 'bg-onsen', char: 'blush', speaker: null, text: 'めぐみんの頬がほんのり赤く染まった。', effect: 'hearts' },
            // 湯上がり
            { bg: 'bg-inn-room', char: null, speaker: null, text: '湯上がりの休憩所。俺は牛乳、めぐみんは湯上がりラムネを所望。' },
            { bg: 'bg-inn-room', char: 'normal', speaker: 'めぐみん', text: '栓が……開かぬ。' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: '貸して。' },
            { bg: 'bg-inn-room', char: 'happy', speaker: 'めぐみん', text: 'おお……封印解除。' },
            { bg: 'bg-inn-room', char: null, speaker: null, text: '髪を乾かすため、俺は手拭いで優しく水気を取った。' },
            { bg: 'bg-inn-room', char: 'blush', speaker: 'めぐみん', text: '……乱暴に扱うな、繊細な魔力回路だ。' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: '髪の話してるよね？' },
            {
                type: 'choice', text: '売店で見つけた安い簪を……', choices: [
                    { text: 'めぐみんの髪にそっと差す', affection: 5 },
                    { text: '「これ、似合いそうだな」と渡す', affection: 3 },
                    { text: '自分用に買う', affection: 0 }
                ]
            },
            { bg: 'bg-inn-room', char: 'blush', speaker: 'めぐみん', text: 'どうだ、似合うか？' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: 'うん。強そうで、可愛い。' },
            { bg: 'bg-inn-room', char: 'proud', speaker: 'めぐみん', text: '二律背反を両立させる我、最強。' },
            { bg: 'bg-inn-room', char: 'blush', speaker: 'めぐみん', text: '……ふ、ふふん。まあ当然ですね！　そなたは我が偉大なる爆裂の魅力に気付いたのですから！' },
            { bg: 'bg-inn-room', char: null, speaker: null, text: '強がりの言葉に隠しきれない照れが滲む。温泉の湯よりも熱い鼓動が胸を打った。' },
        ]
    },

    // ===== 第五話 魔王軍襲来 =====
    {
        id: 4, title: '魔王軍襲来', number: '第五話',
        desc: '平穏を打ち破る闇の軍勢',
        scenes: [
            { bg: 'bg-onsen', char: null, speaker: null, text: '静かな山の温泉でのひとときは、突如として破られた。' },
            { bg: 'bg-night-battle', char: null, speaker: null, text: '夜空を切り裂くように響く角笛の音、地を揺らす無数の足音。', effect: 'shake' },
            { bg: 'bg-night-battle', char: 'serious', speaker: null, text: '俺とめぐみんが慌てて外に出ると、遠くの丘の上に黒い軍勢が広がっていた。旗に刻まれた紋章——魔王軍。' },
            { bg: 'bg-night-battle', char: 'serious', speaker: 'めぐみん', text: '……っ！　我を差し置き最強を名乗る魔王。その眷属が、ついに現れたのですね！' },
            { bg: 'bg-night-battle', char: null, speaker: null, text: 'めぐみんの紅い瞳が闇夜に光る。だが、彼女はすでに今日の分の魔力を使い果たしている。' },
            { bg: 'bg-night-battle', char: null, speaker: 'kuu', text: 'おい、めぐみん。お前、今日はもう魔法が撃てないんだろ！？　逃げるぞ！' },
            { bg: 'bg-night-battle', char: 'serious', speaker: 'めぐみん', text: 'いや、ない！　あれほどの敵の大軍を前にして、爆裂魔法を放つ衝動が抑えられようか！' },
            { bg: 'bg-night-battle', char: null, speaker: 'kuu', text: '抑えろ！　理性を持て！' },
            { bg: 'bg-night-battle', char: 'blush', speaker: 'めぐみん', text: '……kuu。もし明日まで生き延びられれば、我が爆裂で奴らを消し飛ばしてみせましょう。だから——' },
            { bg: 'bg-night-battle', char: 'serious', charImg: 'images/characters/5.png', speaker: 'めぐみん', text: '今日は、そなたが私を守る番です。' },
            {
                type: 'choice', text: 'めぐみんの言葉にどう応える？', choices: [
                    { text: '分かった。俺が守る。だから、お前は生き延びろ', affection: 5 },
                    { text: '二人で生き延びるぞ', affection: 3 },
                    { text: '……無茶言うなよ（でも剣を握る）', affection: 3 }
                ]
            },
            { bg: 'bg-night-battle', char: null, speaker: null, text: '剣を握り直し、迫り来る魔王軍を見据える。闇の中から次々と魔物が姿を現し、唸り声を上げて突進してくる。', effect: 'shake' },
            { bg: 'bg-night-battle', char: 'serious', speaker: 'めぐみん', text: 'kuu……燃え尽きろと叫ぶのは、明日の私に任せます。今は……生き延びてください！' },
            // 避難シーン
            { bg: 'bg-night-battle', char: null, speaker: null, text: '避難誘導の合間、俺たちは町の倉庫で簡易バリケードを組んだ。樽、板、麻縄。' },
            { bg: 'bg-night-battle', char: 'normal', speaker: 'めぐみん', text: 'よいか諸君。ここは"安全結界"だ。大人の言うことを聞き、勇敢に待機せよ。' },
            { bg: 'bg-night-battle', char: null, speaker: null, text: '小さな手がぎゅっと繋がる。炊き出しのスープを受け取り、彼女は香草をひと摘み落とした。' },
            { bg: 'bg-night-battle', char: 'serious', speaker: 'めぐみん', text: '勝利の匂いを覚えさせる。次に嗅いだ時、もう恐怖と結びつかないように。' },
            { bg: 'bg-night-battle', char: null, speaker: null, text: '俺は頷き、足を踏み出した。魔王軍との戦いの幕が、いま上がろうとしていた。' },
        ]
    },

    // ===== 第六話 勝利 =====
    {
        id: 5, title: '勝利', number: '第六話',
        desc: '爆裂の閃光、そして決着',
        scenes: [
            { bg: 'bg-night-battle', char: null, speaker: null, text: '夜の森を埋め尽くした魔王軍との戦いは苛烈を極めた。俺は必死に剣を振るい、宿の護衛たちと共に前線を支え続けた。' },
            { bg: 'bg-night-battle', char: null, speaker: 'kuu', text: 'くっ……数が多すぎる！' },
            { bg: 'bg-night-battle', char: null, speaker: null, text: '額から汗が滴り落ちる。腕は痺れ、足も重い。それでも剣を振り続けた。' },
            { bg: 'bg-night-battle', char: 'serious', speaker: 'めぐみん', text: 'kuu！　退いてください！' },
            { bg: 'bg-night-battle', char: 'serious', speaker: null, text: '振り返ると、めぐみんが杖を掲げていた。瞳が燃えるように赤く輝いている。' },
            { bg: 'bg-night-battle', char: null, speaker: 'kuu', text: 'まさか……魔力がもう戻ったのか！？' },
            { bg: 'bg-night-battle', char: 'proud', speaker: 'めぐみん', text: 'ふふん……紅魔族は、窮地に追い込まれれば底力を発揮するものなのです！' },
            { bg: 'bg-night-battle', char: 'serious', speaker: 'めぐみん', text: 'これが人類最大の攻撃手段！　究極の魔法——！' },
            { bg: 'bg-night-battle', char: null, speaker: 'kuu', text: 'めぐみん、待て！　この距離じゃ俺まで巻き込まれる！' },
            { bg: 'bg-night-battle', char: 'proud', speaker: 'めぐみん', text: '案ずるな！　kuuなら大丈夫です！' },
            {
                type: 'choice', text: '爆裂の瞬間——', choices: [
                    { text: 'めぐみんを信じて地面に伏せる', affection: 5 },
                    { text: '全力で走って距離を取る', affection: 2 },
                    { text: 'めぐみんの前に立ち、背中を守る', affection: 4 }
                ]
            },
            { bg: 'bg-night-battle', char: 'serious', charImg: 'images/characters/6.png', speaker: 'めぐみん', text: 'エクスプロージョン！！！', effect: 'explosion' },
            { bg: 'bg-night-battle', char: null, speaker: null, text: '轟音が全てを飲み込み、魔王軍の前線が一瞬で吹き飛ぶ。炎と衝撃波に包まれた魔物たちは、跡形もなく消え失せていた。', effect: 'shake' },
            { bg: 'bg-night-battle', char: 'happy', speaker: 'めぐみん', text: '……はぁ……はぁ……ナイス爆裂……' },
            { bg: 'bg-night-battle', char: null, speaker: null, text: '膝をついためぐみんを、俺は慌てて抱きとめる。' },
            { bg: 'bg-night-battle', char: null, speaker: 'kuu', text: 'ったく……無茶しやがって。でも、お前のおかげで勝てたよ。' },
            { bg: 'bg-night-battle', char: 'blush', speaker: 'めぐみん', text: '……ふふん、当然です。私は……爆裂魔法をこよなく愛するアークウィザードなのですから……' },
            // 戦後
            { bg: 'bg-kitchen', char: null, speaker: null, text: '戦の後、灯の落ちた台所を借りて、俺は粥を炊いた。塩と刻み葱、最後に卵を落としてとろりと仕上げる。' },
            { bg: 'bg-kitchen', char: 'happy', speaker: 'めぐみん', text: '……香りが、やさしい。' },
            { bg: 'bg-kitchen', char: null, speaker: 'kuu', text: '明日は腕、上がらないぞ。剣の素振りはやめとけ。' },
            { bg: 'bg-kitchen', char: 'happy', speaker: 'めぐみん', text: 'そなたも、爆裂の見学を休め。首が疲れる。' },
            { bg: 'bg-kitchen', char: null, speaker: null, text: '冗談を交わしつつ、血のついたマントを手洗いし、竈の火で乾かす。夜更け、外では犬が二度吠え、静けさが戻った。' },
            { bg: 'bg-kitchen', char: null, speaker: null, text: '確かに、戦場には勝利の余韻だけが残っていた。' },
        ]
    },

    // ===== 第七話 約束 =====
    {
        id: 6, title: '約束', number: '第七話',
        desc: '二人の間に交わされた大切な言葉',
        scenes: [
            { bg: 'bg-inn-room', char: null, speaker: null, text: '魔王軍との戦いから一夜明け、町はようやく静けさを取り戻していた。' },
            { bg: 'bg-inn-room', char: null, speaker: null, text: '俺は宿の一室で眠るめぐみんを見守っていた。' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: '……ったく、無茶ばっかりするんだから。' },
            { bg: 'bg-inn-room', char: null, speaker: null, text: '彼女の胸は小さく上下し、安らかな寝息を立てている。まるで昨日の戦場で命を懸けた人物とは思えないほどに無防備だった。' },
            { bg: 'bg-inn-room', char: 'normal', speaker: 'めぐみん', text: '……kuu……ここは……？' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: '町の宿だよ。お前、爆裂撃ったあとぶっ倒れたんだ。丸一日寝てたんだぞ。' },
            { bg: 'bg-inn-room', char: 'proud', speaker: 'めぐみん', text: 'ふふん……ならば大丈夫です。我は一度眠れば完全回復するのです。' },
            { bg: 'bg-inn-room', char: 'blush', speaker: null, text: 'そう強がりを言うが、身体を起こそうとした瞬間、ふらりとよろける。慌てて俺が肩を支えると、めぐみんは小さく頬を赤らめた。' },
            { bg: 'bg-inn-room', char: 'blush', speaker: 'めぐみん', text: '……すまない。やはり少し、力が抜けているようです。' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: '少しどころじゃないだろ。昨日だって命がけだったんだからな。' },
            { bg: 'bg-inn-room', char: 'blush', speaker: 'めぐみん', text: '……kuu。私は爆裂魔法しか使えない。仲間にとって足手まといだと、何度も言われてきた。でも……' },
            { bg: 'bg-inn-room', char: 'blush', speaker: 'めぐみん', text: '昨日、そなたが私を守ると言ってくれたとき……本当に、嬉しかったのです。' },
            { bg: 'bg-inn-room', char: 'serious', speaker: 'めぐみん', text: 'だから、約束してください。どんな時も、私と一緒にいてくれると。' },
            {
                type: 'choice', text: 'めぐみんの言葉に——', choices: [
                    { text: 'ああ、約束する。めぐみんはめぐみんだから', affection: 5 },
                    { text: '爆裂魔法しか使えなくても、お前は最強だ', affection: 4 },
                    { text: '（黙って手を握る）', affection: 5 }
                ]
            },
            { bg: 'bg-inn-room', char: 'blush', speaker: 'めぐみん', text: '……ふ、ふふん。まあ当然ですね！　そなたは私の偉大さに気付いたのですから！', effect: 'hearts' },
            { bg: 'bg-inn-room', char: null, speaker: null, text: '照れ隠しに誇張した言葉を並べるが、その声はわずかに震えていた。' },
            // 日常
            { bg: 'bg-inn-room', char: null, speaker: null, text: '翌朝、宿の裏庭で洗濯。めぐみんは袖をまくり、ぎこちなく板でこする。' },
            { bg: 'bg-inn-room', char: 'normal', speaker: 'めぐみん', text: '泡が逃げる。魔法で泡を固定——' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: 'やめて。洗濯板が砕ける未来が見える。' },
            { bg: 'bg-inn-room', char: 'proud', speaker: 'めぐみん', text: '裁縫は紅魔族のたしなみだ。マントは旗、旗は誇り。自ら繕う。' },
            { bg: 'bg-inn-room', char: 'happy', speaker: null, text: '昼、パンに卵を挟んだだけのサンドを二つ。めぐみんは「勝者の昼餉だ」と胸を張った。' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: 'こういうのが、一番うまい。' },
            { bg: 'bg-inn-room', char: null, charImg: 'images/characters/7.png', speaker: null, text: '小さな影が二つ、物干しの下で寄り添っていた。それは戦い以上に大切な絆となったのだった。' },
        ]
    },

    // ===== 第八話 デート =====
    {
        id: 7, title: 'デート', number: '第八話',
        desc: '二人だけの特別な一日',
        scenes: [
            { bg: 'bg-town', char: 'blush', speaker: 'めぐみん', text: 'kuu、今日は特別な日としましょう。我とそなたの、初めての……で、でーと、です！' },
            { bg: 'bg-town', char: null, speaker: 'kuu', text: 'おい、今ちょっと噛んだだろ。' },
            { bg: 'bg-town', char: 'blush', speaker: 'めぐみん', text: 'か、噛んでません！　我は紅魔族随一の大魔法使い、めぐみん！　言葉に詰まることなど……あ、あるわけが……' },
            { bg: 'bg-town', char: null, speaker: 'kuu', text: '分かった。デート、行こうか。' },
            { bg: 'bg-market', char: null, speaker: null, text: '町の大通りは、露店や大道芸で賑わっていた。焼きたてのパンの香り、魔道具の露店、子どもたちの笑い声。' },
            { bg: 'bg-market', char: 'happy', speaker: 'めぐみん', text: 'kuu！　あの綿あめというもの、爆裂雲に見えませんか？　食べても爆発しないのでしょうか？' },
            { bg: 'bg-market', char: null, speaker: 'kuu', text: '爆発したら事件だろ。' },
            {
                type: 'choice', text: '綿あめを買って——', choices: [
                    { text: 'めぐみんの口元についた綿あめを指で拭う', affection: 5 },
                    { text: '二人で分けて食べる', affection: 3 },
                    { text: '「爆裂綿あめと命名しよう」と冗談を言う', affection: 4 }
                ]
            },
            { bg: 'bg-market', char: 'blush', charImg: 'images/characters/8.png', speaker: 'めぐみん', text: '……甘い。最高、です。' },
            { bg: 'bg-market', char: 'proud', speaker: 'めぐみん', text: 'な、なにを！　爆裂魔法こそ至高ですが……甘味もまた、人を幸福に導く魔力なのです！' },
            // 本屋・路地
            { bg: 'bg-town', char: null, speaker: null, text: '本屋の屋台で、魔導理論の古本を一冊、旅の料理本を一冊。' },
            { bg: 'bg-town', char: 'proud', speaker: 'めぐみん', text: '二冊まで。荷物になる。ならば我は理論、そなたは料理。知の分担だ。' },
            { bg: 'bg-town', char: 'happy', speaker: null, text: '路地の猫が伸びをして、めぐみんの足元にすり寄る。' },
            { bg: 'bg-town', char: 'happy', speaker: 'めぐみん', text: 'おお、小さきもふもふ。名を授けよう、爆丸。' },
            { bg: 'bg-town', char: null, speaker: 'kuu', text: '明日には忘れてる名付けやめな。' },
            { bg: 'bg-town', char: null, speaker: null, text: '広場の吹きガラス屋で、赤いビー玉を一つ。指先の光が、彼女の瞳の色に重なる。' },
            {
                type: 'choice', text: '赤いビー玉を——', choices: [
                    { text: '「おそろいにしよう」と二つ買う', affection: 5 },
                    { text: 'めぐみんにプレゼントする', affection: 4 },
                    { text: '記念品として一つ買う', affection: 2 }
                ]
            },
            { bg: 'bg-town', char: 'happy', speaker: 'めぐみん', text: 'うむ。二人で持てば、これはただの玉ではない。合図だ。' },
            // 湖畔
            { bg: 'bg-sunset-lake', char: null, speaker: null, text: '次に立ち寄ったのは、湖畔にある小さな公園だった。澄んだ湖面がきらめき、花々が咲き誇る。' },
            { bg: 'bg-sunset-lake', char: 'happy', speaker: 'めぐみん', text: 'kuu……こうして歩くのも、悪くないですね。' },
            { bg: 'bg-sunset-lake', char: 'blush', speaker: 'めぐみん', text: '……kuuと一緒にいると、爆裂以外のことにも心が動くのです。綿あめを食べて笑ったり、人混みを歩いて胸が高鳴ったり……こんな気持ち、初めてです。' },
            { bg: 'bg-sunset-lake', char: 'serious', speaker: 'めぐみん', text: 'だから、約束してください。これから先も……私の隣にいてくれると。' },
            { bg: 'bg-sunset-lake', char: null, speaker: 'kuu', text: 'ああ、もちろんだ。' },
            { bg: 'bg-sunset-lake', char: 'happy', speaker: 'めぐみん', text: 'ふふん……これぞ、我が人生最大の爆裂……いえ、幸福の瞬間です！', effect: 'hearts' },
            { bg: 'bg-sunset-lake', char: null, speaker: null, text: 'この時間こそ、爆発よりも尊い奇跡のように思えたから。' },
        ]
    },

    // ===== 第九話 プロポーズ =====
    {
        id: 8, title: 'プロポーズ', number: '第九話',
        desc: '夕暮れの湖畔、運命の言葉',
        scenes: [
            { bg: 'bg-sunset-lake', char: null, speaker: null, text: '夕暮れの湖畔。人影はすでになく、橙色の光が水面を照らしていた。' },
            { bg: 'bg-sunset-lake', char: 'serious', speaker: 'めぐみん', text: '……kuu。私は爆裂魔法しか使えない。冒険者としては不便で、仲間を困らせることも多い。' },
            { bg: 'bg-sunset-lake', char: 'blush', speaker: 'めぐみん', text: 'だけど……そなたと過ごす時間だけは、どんな爆裂よりも大切だと思えるのです。' },
            { bg: 'bg-sunset-lake', char: null, speaker: null, text: 'その瞳は赤く揺れ、迷いと期待が入り混じっていた。俺は深呼吸をして、彼女の前に立つ。' },
            // 回想：台所
            { bg: 'bg-kitchen', char: null, speaker: null, text: '告白の前、昼は一緒に台所に立った。俺が野菜を刻み、めぐみんは鍋を見張る。' },
            { bg: 'bg-kitchen', char: null, speaker: 'kuu', text: '焦げないように、ゆっくり混ぜて。' },
            { bg: 'bg-kitchen', char: 'normal', speaker: 'めぐみん', text: '任せよ。魔力循環の如く、対流を起こす……おっと、跳ねた。' },
            { bg: 'bg-kitchen', char: 'proud', speaker: 'めぐみん', text: '家事も戦術。二人の生活を守る"結界術"だ。' },
            { bg: 'bg-sunset-lake', char: null, speaker: null, text: '食後、湖で指輪の箱を何度も出し入れして、俺は深呼吸を覚えた。' },
            { bg: 'bg-sunset-lake', char: 'happy', speaker: 'めぐみん', text: '緊張は悪い魔物じゃないよ。' },
            { bg: 'bg-sunset-lake', char: null, speaker: 'kuu', text: 'どうして？' },
            { bg: 'bg-sunset-lake', char: 'blush', speaker: 'めぐみん', text: '本気の証拠だから。' },
            // プロポーズ
            { bg: 'bg-sunset-lake', char: null, speaker: null, text: '俺はポケットから取り出した小さな指輪を、震える手で差し出した。' },
            {
                type: 'choice', text: 'プロポーズの言葉は——', choices: [
                    { text: 'めぐみん。俺と結婚してくれ', affection: 5 },
                    { text: 'お前の爆裂に、一生付き合わせてくれ', affection: 5 },
                    { text: 'ずっと一緒にいてほしい。……俺の隣で', affection: 5 }
                ]
            },
            { bg: 'bg-sunset-lake', char: 'blush', speaker: null, text: '静寂の中、その言葉が夜空に溶けていく。めぐみんは口をぱくぱくと開き、言葉を失っていた。', effect: 'hearts' },
            { bg: 'bg-sunset-lake', char: 'blush', speaker: 'めぐみん', text: '……これは……世界が選択せし運命、ですね。' },
            { bg: 'bg-sunset-lake', char: null, speaker: null, text: '照れ隠しのように中二病めいた台詞を口にするが、その頬は涙で濡れていた。' },
            { bg: 'bg-sunset-lake', char: 'blush', speaker: 'めぐみん', text: '私は、爆裂魔法を愛するアークウィザード。だけど今は、それ以上に……kuuを愛しています。' },
            { bg: 'bg-sunset-lake', char: 'happy', charImg: 'images/characters/9.png', speaker: 'めぐみん', text: 'ふふん……これ以上の爆裂など、この世に存在しません。kuu、私はそなたと共に歩みましょう。' },
            { bg: 'bg-sunset-lake', char: null, speaker: null, text: 'その宣言に、俺の胸は熱く震えた。爆発にも負けないほどの衝撃が、心の奥で広がっていく。' },
        ]
    },

    // ===== 第十話 結婚 =====
    {
        id: 9, title: '結婚', number: '第十話',
        desc: '二人の新しい物語の始まり',
        scenes: [
            { bg: 'bg-church', char: null, speaker: null, text: '季節は移ろい、俺とめぐみんはついに夫婦となった。' },
            { bg: 'bg-church', char: null, speaker: null, text: '町の小さな教会に集まったのは、冒険で世話になった仲間たちや町の人々。厳かな鐘の音が鳴り響く中、俺は緊張で汗ばむ手を握りしめていた。' },
            { bg: 'bg-church', char: 'happy', speaker: null, text: '純白のドレスに身を包んだめぐみんが、祭壇の前に現れた瞬間、会場がざわめく。' },
            { bg: 'bg-church', char: 'blush', speaker: 'めぐみん', text: '……kuu、待たせました。' },
            { bg: 'bg-church', char: null, speaker: 'kuu', text: 'いや……綺麗だよ。' },
            { bg: 'bg-church', char: 'blush', speaker: null, text: 'その一言で、めぐみんの顔が真っ赤に染まる。' },
            { bg: 'bg-church', char: 'proud', speaker: 'めぐみん', text: 'ふふん、当然です！　我は紅魔族随一の大魔法使い、そして今日からはそなたの妻なのですから！' },
            { bg: 'bg-church', char: null, speaker: null, text: '司祭の問いかけに、俺たちは互いの手を取り、誓いの言葉を口にする。' },
            {
                type: 'choice', text: '誓いの言葉——', choices: [
                    { text: '爆裂魔法より強い愛を、永遠に', affection: 5 },
                    { text: '毎日の爆裂に付き合い続けることを誓います', affection: 5 },
                    { text: 'めぐみん、ずっと俺の隣にいてくれ', affection: 5 }
                ]
            },
            { bg: 'bg-church', char: null, speaker: null, text: 'その瞬間、会場の外で——ドンッ！——と大きな音が響いた。', effect: 'explosion' },
            { bg: 'bg-church', char: null, speaker: 'kuu', text: 'め、めぐみん！　式の最中に爆裂魔法撃つな！' },
            { bg: 'bg-church', char: 'proud', speaker: 'めぐみん', text: 'ち、違います！　あれは祝砲です！　私の心が爆発したのです！' },
            { bg: 'bg-church', char: 'happy', speaker: null, text: '会場が笑いに包まれる。', effect: 'hearts' },
            // 新居
            { bg: 'bg-inn-room', char: null, speaker: null, text: '式のあと、新居の小さな部屋。窓辺に二つのマグ、壁には簡素な棚。' },
            { bg: 'bg-inn-room', char: 'normal', speaker: 'めぐみん', text: 'ここが我らの拠点か。' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: 'そう。まずは掃除と、鍋一つ買おう。' },
            { bg: 'bg-inn-room', char: 'proud', speaker: 'めぐみん', text: '「めぐみん＆kuu　結界内　安全」……誇れ。二人の旗印だ。' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: '名前出すの恥ずかしいんだけど。' },
            { bg: 'bg-inn-room', char: 'happy', speaker: 'めぐみん', text: '明日は何する？　洗濯、買い出し、そして——記念に控えめな祝砲を一発。' },
            { bg: 'bg-inn-room', char: null, speaker: 'kuu', text: '最後のだけなし。' },
            { bg: 'bg-inn-room', char: 'happy', speaker: null, text: '笑い声が、まだ何も染みついていない部屋に、最初の音として刻まれた。' },
            { bg: 'bg-inn-room', char: null, speaker: null, text: 'この先どんな困難が待っていようと、めぐみんとならきっと乗り越えられる——' },
            { bg: 'bg-sunset-lake', char: 'happy', speaker: null, text: 'こうして俺たちの新しい物語が始まったのだった。', effect: 'hearts' },
        ]
    }
];
