import {
  HeroData,
  BnrData,
  ChapterData,
  ChapterDetailData,
  CarouselAboutData,
  FaqData,
  fontAwesomeData,
} from '@/store/app.config'

export class AppData {
  //COMMON
  public static appTitle = 'Vuedation(Vue3 + Vite) '
  // public static newsPath = 'https://pm.local/wp-json/wp/v2/posts/'
  // public static newsCategoriesPath = 'https://pm.local/wp-json/wp/v2/categories/'
  //MV
  public static heroDataList: HeroData[] = [
    {
      page: 'Top',
      headingHtml:
        '<b><span>Vuedation(Vue3 + Vite)</span></b><span class="PageHero__headingEn">Vue.js 3</span><span>でWeb開発</span>',
      descHtml:
        'これは<b>架空の書籍</b>「Vue.js 3による一歩進んだWeb開発」の<mark><em>仮想紹介サイト</em></mark>です<br />Vue3を使いこなし最新バージョンの関連ライブラリやハイレベルフレームワークと統合し、プロジェクト全体を構築できるようにする方法について学んでいきます。',
      cls: ['-home', 'bg-hero-overlapping-circles-green-400/30', 'dark:bg-dark-50/30'],
    },
    {
      page: 'About',
      headingHtml: 'About',
      descHtml: '本書の目次のご紹介<br />何を学べば良いのかを順に並べています。',
      cls: ['-about', 'bg-hero-hideout-lime-600/80', 'dark:bg-dark-50/30']
    },
    {
      page: 'Author',
      headingHtml: 'Author',
      descHtml:
        'とにかく簡単にWebサイトを構築したい。<br />その思いだけで色々な技術を日々学んでいます。<br />そんな中で自分の知見を少しでもみなさんに共有してもらえればと思っています。',
      cls: ['-author', 'bg-hero-anchors-away-emerald-400/30', 'dark:bg-dark-50/30'],
    },
    {
      page: 'Production note',
      headingHtml: 'Production<br>note',
      descHtml:
        '本書執筆にあたって、<br />プロジェクト始動から販売/公開までの裏側を<br />プロジェクトメンバーが会話形式で暴露しています。',
      cls: ['-note', 'bg-hero-bubbles-green-400/30 bg-lime-600/20', 'dark:bg-dark-50/30'],
    },
    {
      page: 'Q&A',
      headingHtml: 'Q&A',
      descHtml: '本書やPhantomoonについて、<br />よくある質問とその回答をご紹介します。',
      cls: ['-qa', 'bg-hero-death-star-cyan-50/30 bg-green-600/20', 'dark:bg-dark-50/30'],
    },
    {
      page: 'Form',
      headingHtml: 'Form',
      descHtml:
        'FormKitのテストページです。<br />便利なプラグインのようなのでお試しです。<br />送信機能は未実装です。',
      cls: ['-form', 'bg-hero-charlie-brown-yellow-500/30', 'dark:bg-dark-50/30'],
    },
    {
      page: 'NotFound',
      headingHtml: 'NotFound',
      descHtml: 'NotFound',
      cls: '-none',
    },
  ]

  /**
MIT License

Copyright (c) 2009 - 2020 [Codrops](https://tympanus.net/codrops)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

  public static vertexDemo0 = `
uniform float time;
uniform float progress;
uniform vec4 resolution;
varying vec2 vUv;
// varying vec4 vPosition;
varying float vProgress;
varying float vProgress1;
uniform vec2 pixels;

attribute float offset;
attribute float random;
attribute vec3 centroid1;
attribute vec3 bary;
varying vec3 vBary;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,
    oc * axis.x * axis.y - axis.z * s,
    oc * axis.z * axis.x + axis.y * s,
    0.0,
    oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,
    oc * axis.y * axis.z - axis.x * s, 0.0,
    oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s,
    oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float easeInOutQuint(float t){
  return t < 0.5 ? 16.0 * t * t * t * t * t : 1.0 + 16.0 * (--t) * t * t * t * t;
}
float easeOutQuint(float t){
  return 1. + (--t) * t * t * t * t;
}
float easeOut(float t){
  return  t * t * t;
}

void main() {
  float PI = 3.141592653589793238;
  vUv = uv;
  vBary = bary;

  vec3 newpos = position;

  float o = 1. - offset;
  float pr = (progress - 0.5)*(0. + resolution.y/resolution.x) + 0.5;
  pr = progress;
  float prog = clamp( (pr - o*0.9) /0.1,0.,1.);
  vProgress =  prog;
  vProgress1 =  clamp( (pr - clamp(o - 0.1,0.,1.)*0.9) /0.1,0.,1.);
  newpos = rotate((newpos - centroid1), vec3(1.,0.,0.),-prog*PI) +
    centroid1 + vec3(0.,-1.,0.)*prog*0.;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newpos, 1.0 );
}
`

  public static fragmentDemo0 = `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying float vProgress;
varying float vProgress1;
float PI = 3.141592653589793238;
varying vec3 vBary;
void main()	{

float width =2.5*vProgress1;
vec3 d = fwidth(vBary);
vec3 s = smoothstep(d * (width + 0.5), d * (width - 0.5), vBary);
float alpha = max(max(s.x, s.y), s.z);
vec3 color = vec3(alpha);
vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
vec4 t = texture2D(texture1,newUV);
float opa = smoothstep(1.,0.5,vProgress);
opa = 1. - vProgress;
gl_FragColor = vec4(vUv,0.0,opa);
gl_FragColor = vec4(t.rgb + 1.*color*vProgress1,opa);
}
`
  // FOOTER
  public static bannerDataList: BnrData[] = [
    {
      src: '/static/banner-phantomoon.png',
      href: 'https://www.phantomoon.com/',
      alt: 'バナー：Phantomoon Inc.',
    },
    {
      src: '/static/banner-publish.png',
      href: '#',
      alt: 'バナー：Plubish Inc.',
    },
  ]

  // ABOUT
  public static chapterDataList: ChapterData[] = [
    {
      category: 'CHAPTER 01',
      title: 'Vue3の紹介',
    },
    {
      category: 'CHAPTER 02',
      title: 'アセットの管理とUIフレームワークの追加',
    },
    {
      category: 'CHAPTER 03',
      title: 'データの取得とページ・レイアウト・コンポーネントの作成',
    },
    {
      category: 'CHAPTER 04',
      title: 'ステートの管理',
    },
    {
      category: 'CHAPTER 05',
      title: 'フォームの操作',
    },
    {
      category: 'CHAPTER 06',
      title: 'Nuxtの紹介',
    },
    {
      category: 'CHAPTER 07',
      title: 'VueとWordPressの連携',
    },
    {
      category: 'CHAPTER 08',
      title: 'Vite＆Vue SSRの紹介',
    },
    {
      category: 'CHAPTER 09',
      title: 'さらなるステップへ',
    },
  ]
  public static chapterDetailDataList2: ChapterDetailData[][] = [
    [
      {
        index: '001',
        title: 'コースを知る',
        subList: ['本書で解説する範囲'],
        detailHtml:
          'このコースでは、Vue.js 3（このコースでは「Vue 3」と呼びます）を使いこなし、最新バージョンの他のVue関連ライブラリや高位フレームワーク、例えばWindi CSS, Less CSS preprocessor, Vue Router, Vuex, Nuxt.js（ このコースでは「Nuxt」と呼びます ）と統合し、プロジェクト全体を構築できるようにする方法について学びます。',
      },
      {
        index: '002',
        title: 'Vueを知る',
        subList: [
          'アプリの種類',
          '従来のサーバーサイドレンダリングアプリ(SSR)',
          '従来のシングルページアプリ(SPA)',
          'ユニバーサルサーバーサイドレンダリングアプリ(SSR)',
          'Static-generated app (SSG)',
          'Vueはどこに位置するのか？',
        ],
        detailHtml:
          '従来のサーバーサイドレンダリングアプリ、従来のシングルページアプリ（SPA）、ユニバーサルサーバーサイドレンダリングアプリ（SSR）、静的生成アプリ（SSG）など、さまざまな種類のアプリを理解する。SPA、ユニバーサルSSRアプリ、SSGアプリを作成するためのVueを発見する。',
      },
      {
        index: '003',
        title: 'Vue CLIを使い始める',
        subList: [
          'Vue CLI のインストールと Vue プロジェクトの作成',
          'Vue CLIのプロジェクト構造を理解する',
        ],
        detailHtml:
          'Vue CLIでVueアプリを作成し、/src/や/public/ディレクトリなど、Vue CLIのプロジェクト構造を学習する。',
      },
      {
        index: '004',
        title: 'Viteを使い始める',
        subList: ['Vueプロジェクトの作成', 'Viteのプロジェクト構造を理解する'],
        detailHtml:
          'Viteを使ってVueアプリを作成し、/src/ や /public/ ディレクトリなど、Viteのプロジェクト構造を学ぶことができます。',
      },
    ],
    [
      {
        index: '001',
        title: 'アセットを配信する',
        subList: ['asset と public の画像を提供する', 'カスタムフォントの提供'],
        detailHtml: 'Viteプロジェクトで画像やフォントなどの公開・静的アセットを配信する。',
      },
      {
        index: '002',
        title: 'UIフレームワークの追加',
        subList: [
          'Windi CSS を UI フレームワークとして追加する',
          'Windi CSS でレスポンシブなレイアウトを作成する',
        ],
        detailHtml:
          'VueアプリのUIフレームワークとしてWindi CSSを使用し、レスポンシブなレイアウトを作成します。',
      },
      {
        index: '003',
        title: 'CSSプリプロセッサーを追加する',
        subList: ['CSSプリプロセッサとしてLessを追加する', 'Lessでグローバルスタイルを書く'],
        detailHtml: 'VueアプリでCSSプリプロセッサとしてLessを使ってCSSを記述する。',
      },
      {
        index: '004',
        title: '動的なアセットの提供',
        subList: [
          'Options APIの使用',
          'global mixinsの使用',
          'Composition APIを使う',
          'シングルファイルコンポーネント（SFC）<script setup>を使用する',
        ],
        detailHtml:
          'オプション API、グローバルミックス、コンポジション API を使用して、シングルファイルコンポーネント (SFC) <script setup>動的アセットを提供する。',
      },
    ],
    [
      {
        index: '001',
        title: 'Pageの作成',
        subList: [
          'Vueルータを始めよう',
          '簡単なルートとページの作成',
          '動的なルートとページを作成する',
          'ネストしたルートとページの作成',
          'ルートパラメーターの検証',
          'すべての未知のルートを捕捉する',
          'vite-plugin-pages を使ってルートを自動生成する',
        ],
        detailHtml:
          'Vue Routerを使用してVueページとルートを作成し、ルートを検証し、不明なルート、カスタムエラー、JavaScriptのデフォルトエラーを処理します。',
      },
      {
        index: '002',
        title: 'データの取得',
        subList: [
          'JSONサーバーとMarkdownドキュメントでモックREST APIを作成する',
          'JavaScript の fetch API でリソースを取得する',
          'Composition APIでロジックを抽出し再利用する',
          'ナビゲーションの後にデータを取得する',
          'ナビゲーションの前にデータを取得する',
        ],
        detailHtml:
          'JSON Server、Markdownドキュメント、および markdown-json を使用してREST APIモックを作成し、Vue RouterとJavaScript fetch APIを使用してモックAPIからデータをフェッチします。',
      },
      {
        index: '003',
        title: 'レイアウトの作成',
        subList: [
          'スロットとダイナミックコンポーネントの使用',
          'ルート・メタ・フィールドの使用',
          'ルートごとのナビゲーションガードの使用',
          'グローバルナビゲーションガードの使用',
          'Mittを使ったコンポーネント単位のナビゲーションガードとルート単位のナビゲーションガードの使い分け',
          'Vuexでコンポーネント内とルートごとのナビゲーションガードを使用する',
        ],
        detailHtml:
          'スロット、ダイナミックコンポーネント、Vue Router、Vuex、Mitt、ミドルウェアを使用してレイアウトを作成します。',
      },
      {
        index: '004',
        title: 'コンポーネントの作成',
        subList: [
          'defineProps を使って子コンポーネントにデータを受け渡す',
          'defineEmits を使って親コンポーネントまでデータを送信する',
          'defaultAsyncComponent でコンポーネントをレイジーローディングする',
          'Lazy-loading（レイジーサイズ）により画像を読み込む',
          'components、APIs、Composablesをオンデマンドで自動インポートする',
        ],
        detailHtml:
          'defineProps と defineEmits API を使ってコンポーネントを作成し、データの受け渡しを行います。defineAsyncComponent API でコンポーネントを遅延ロードし、lazysizes (JavaScript library)で画像を遅延ロードします。',
      },
    ],
    [
      {
        index: '001',
        title: 'Vuexを理解する',
        subList: [
          'Vuexとは？',
          'Vuexのインストール',
          '状態を把握する',
          'ゲッターを理解する',
          '変異(mutations)を理解する',
          '実行(actions)を理解する',
        ],
        detailHtml:
          'VuexとVuexストアの要であるステート、ゲッター、ミューテーション、アクションを理解する。',
      },
      {
        index: '002',
        title: 'Vuexでショッピングカートを作成する',
        subList: [
          'カートストアとコンポーネントの構造化',
          '状態を作成する',
          'ゲッターメソッドの作成',
          '変異(mutation)メソッドの作成',
          'アクションメソッドの作成',
          'アクションメソッドのディスパッチ',
          'PopperでカートのUXを向上させる',
        ],
        detailHtml: 'VuexとPopperを使ってショッピングカートシステムを構築します。',
      },
      {
        index: '003',
        title: 'Vuexストアの永続化とモジュール化',
        subList: ['Vuexストアをlocalforageで永続化する', '名前空間を使ったVuexストアの改造'],
        detailHtml:
          'ローカルストレージを使用し、ネームスペースのあるモジュールストアを作成することで、ストアの状態を永続化する。',
      },
      {
        index: '004',
        title: 'VuexヘルパーとVueスロットを活用する',
        subList: [
          'Vuexヘルパーを知る',
          'Vuexヘルパーを使ったストアのリファクタリング',
          'Vueスロットを使ったストアのリファクタリング',
        ],
        detailHtml: 'VuexヘルパーとVueスロットを使用して、ストアを改善し、リファクタリングします。',
      },
    ],
    [
      {
        index: '001',
        title: 'v-modelでカスタムフォーム入力を作成する',
        subList: [
          'v-model をサポートしたカスタムテキスト入力の作成',
          'v-model をサポートしたカスタムテキストエリア入力を作成する',
          'v-model をサポートしたカスタムラジオ入力の作成',
          'v-model をサポートしたカスタムチェックボックス入力の作成',
          'v-model をサポートしたカスタムチェックボックスグループの入力の作成',
          'v-model をサポートしたカスタムセレクトインプットを作成する',
          'v-model をサポートしたカスタム複数選択入力の作成',
        ],
        detailHtml:
          'v-model で動作する&lt;input&gt;, &lt;textrea&gt;, &lt;select&gt; 要素で、カスタム入力を作成します。',
      },
      {
        index: '002',
        title: 'フォーム入力の検証',
        subList: [
          'POST レスポンスを模倣する',
          '基本構造の追加',
          'ラジオボタン入力の検証：敬称略/タイトル',
          'Validating text inputs: name',
          'Validating email inputs: email',
          'Validating numeric inputs: telephone',
          'Validating select inputs: contact method（セレクト・インプットの検証：コンタクト・メソッド）',
          'Validating textarea inputs: message (テキストエリア入力の検証)',
          'チェックボックスの入力を検証する: 購読と同意',
          'フォームデータを投稿する',
        ],
        detailHtml:
          'v-model でコンタクトフォームを作成し、フォームの入力を検証して、fetch API でフォームのデータを投稿します。また、コンタクトフォームに POST リクエストを送信するために、POST レスポンスのモックを作成する。',
      },
      {
        index: '003',
        title: 'Vuelidateでフォームを検証する',
        subList: [
          'Vuelidateを始めるにあたって',
          'フォーム入力のリファクタリング',
          'ダイナミックスキーマの作成',
          'checkForm 関数のリファクタリング',
        ],
        detailHtml:
          'Vuelidateを使用したお問い合わせフォームと入力バリデーションの改善とリファクタリング。',
      },
    ],
    [
      {
        index: '001',
        title: 'Nuxtを始めよう',
        subList: ['Nuxtプロジェクトの作成', 'Nuxtのプロジェクト構造を理解する'],
        detailHtml: 'Nuxtアプリを作成し、Nuxtのプロジェクト構造とディレクトリを学習します。',
      },
      {
        index: '002',
        title: 'ページの追加、データの取得、エラーの処理',
        subList: [
          'シンプルなページ、ネストされたページ、動的なページを追加する',
          'useFetch を使ってデータを取得する',
          '404.vueと error.vue でエラーを処理する',
        ],
        detailHtml:
          'Nuxtでシンプルなページ、ネストされたページ、ダイナミックなページを追加することができます。Nuxtのコンポジション関数 useFetch を使ってデータをフェッチします。カスタマイズされた 404.vue と error.vue ファイルを使用して、エラーを処理します。',
      },
      {
        index: '003',
        title: 'レイアウト、コンポーネント、およびコンポーザブルの追加',
        subList: [
          'レイアウトの作成と変更',
          'コンポーネントの作成とインポート',
          'コンポーザブルの作成とインポート',
        ],
        detailHtml:
          '<NuxtLayout> コンポーネントを使用してNuxtにレイアウトを追加します。コンポーネントを作成し、ネストされたサブディレクトリにコンポーネントを整理してNuxtに自動インポートします。コンポーザブルを作成し、自動インポートする。',
      },
      {
        index: '004',
        title: 'アセットを提供する、Windi CSSとLessを追加する',
        subList: ['アセットの提供、プラグインの作成', 'Windi CSSとLessを追加する'],
        detailHtml:
          'プラグインを使用してパブリックおよびスタティックなアセットを提供し、NuxtプロジェクトにWindi CSSおよびLess CSSプリプロセッサを追加します。',
      },
    ],
    [
      {
        index: '001',
        title: 'WordPress用のVue SPAを作成する',
        subList: [
          'プリコンパイルされていないVueテンプレートのためのセットアップ',
          'VueのインラインテンプレートでSPAを開発する',
          'Vue SPAとWordPressの統合',
        ],
        detailHtml: 'プリコンパイルされていないVueのテンプレートで、WordPress用のSPAを作成する。',
      },
      {
        index: '002',
        title: 'WordPress用のVite MPAを作成する',
        subList: [
          'Viteマルチページアプリ（MPA）のセットアップ',
          'インラインVueテンプレートでMPAを開発する',
          'Vite MPAsとWordPressの統合',
        ],
        detailHtml:
          'WordPress用のViteマルチページVueアプリを作成します。JavaScriptのモジュールを分割し、WordPressのテンプレート上で別々に適用します。',
      },
    ],
    [
      {
        index: '001',
        title: 'Vite SSRの入門',
        subList: [
          'Vue SSRのためのVite SSRのセットアップ',
          'Vite SSRのWordPressへのセットアップについて',
        ],
        detailHtml:
          'Vue SSRアプリを作成するためにVite SSRをセットアップする。Vite SSRを設定して、WordPressを提供するためのVue SSRアプリを作成します。',
      },
      {
        index: '002',
        title: '高度なVue SSRを作成する',
        subList: [
          'ヘッドレスCMSであるWordPressのセットアップ',
          'ページの追加とデータの取り込み',
          '404, 500, 506エラーを処理します。',
          'ドキュメントヘッドの管理',
        ],
        detailHtml:
          'WordPress REST APIを使用してヘッドレスWordPress CMSをセットアップする。Vue SSRアプリにdocument headタグを使用したページを追加し、404、404、500、JavaScriptのデフォルトエラーを処理します。',
      },
      {
        index: '003',
        title: 'vite-ssrプラグインの使用',
        subList: [
          'Vue SSRのための vite-ssr を使ったセットアップ',
          'ページの追加とデータの取得',
          '404, 500, 506エラーを処理します',
        ],
        detailHtml:
          'Vue SSRアプリを作成するために、Vite SSRプロジェクトとVite SSRプラグイン vite-ssr をセットアップします。Vue SSRアプリにHTMLドキュメントのheadタグを持つページを追加し、vite-ssrプラグインを使って404, 404, 500, JavaScriptのデフォルトエラーを処理することができます。',
      },
    ],
    [
      {
        index: '001',
        title: 'オプションを知る',
        subList: [
          'Nuxtと他のSSRオプション',
          'Gridsome',
          'VuePress',
          'VitePress',
          'その他の SSG オプション',
        ],
        detailHtml:
          'Nuxt、GridSome、VuePress、VitePress、その他のVite SSRやSSGのオプションなど、Vueをさらに進化させるためのオプションを調べてみましょう。',
      },
      {
        index: '002',
        title: '知識を試す',
        subList: [
          'Assets に関するクイズ',
          'ページとレイアウトに関するクイズ',
          'コンポーネントに関するクイズ',
          'Vuexストアに関するクイズ',
          'Nuxtに関するクイズ',
        ],
        detailHtml:
          'アセット、ページ、レイアウト、コンポーネント、Vuex Store、Nuxtに関する知識を問う。',
      },
    ],
  ]

  public static carouselAboutDataList: CarouselAboutData[] = [
    {
      src: '/static/about/about-carousel-01.png',
      srcL: '/static/about/about-carousel-01.png',
      alt: 'カルーセル1枚目',
    },
    {
      src: '/static/about/about-carousel-02.png',
      srcL: '/static/about/about-carousel-02.png',
      alt: 'カルーセル2枚目',
    },
    {
      src: '/static/about/about-carousel-03.png',
      srcL: '/static/about/about-carousel-03.png',
      alt: 'カルーセル3枚目',
    },
    {
      src: '/static/about/about-carousel-04.png',
      srcL: '/static/about/about-carousel-04.png',
      alt: 'カルーセル4枚目',
    },
    {
      src: '/static/about/about-carousel-05.png',
      srcL: '/static/about/about-carousel-05.png',
      alt: 'カルーセル5枚目',
    },
  ]

  // SocialData
  public static fontAwesomeDataList: fontAwesomeData[] = [
    {
      name: 'instagram',
      link: 'https://www.instagram.com/muraie_jin/',
      cls: ['fa-brands', 'fa-instagram-square'],
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/jin-muraie',
      cls: ['fa-brands', 'fa-linkedin'],
    },
    {
      name: 'github',
      link: 'https://github.com/annrie',
      cls: ['fa-brands', 'fa-github'],
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/muraie_jin',
      cls: ['fa-brands', 'fa-twitter-square'],
    },
    {
      name: 'facebook',
      link: 'https://www.facebook.com/muraiejin',
      cls: ['fa-brands', 'fa-facebook'],
    },
  ]
  //  FAQ
  public static faqDataList: FaqData[] = [
    {
      question: '書籍を購入したい',
      answer: '残念ながらまだ書籍化はできていません。仮想書店のサンプルとしてご覧ください。',
    },
    {
      question: 'Vuedationって何ですか？',
      answer:
        '元々は、Vueに<a href="https://get.foundation" target="_blank" rel="nofollow">Foundation</a>を組み込んだものでした。Vue3 + webpackの環境では問題なかったのですが、Viteとは相性が悪かったので<a href="https://windicss.org" target="_blank" rel="nofollow">Windicss</a>と<a href="https://github.com/unocss/unocss" target="_blank" rel="nofollow">UnoCSS</a>という別のシステム(それそれ、CSSフレームワークとAtomicCSSエンジン)を試用中です。Foundationも<a href="https://github.com/foundation/foundation-sites/discussions/12310" target="_blank" rel="nofollow">バージョン7を準備中</a>なようですので、期待を込めて名前だけは元のままにしてあります。',
    },
    {
      question: 'Vueを学習するのに適した書籍やサイトを教えてください',
      answer:
        '<a href="https://www.c-r.com/book/detail/1413" target="_blank" rel="nofollow">「現場で使えるVue.js 3.x実践ガイド」</a>が大変参考になりました。このサイトの骨組みはほとんどそのままです。<br />なお、上記参考資料に追加で取り入れたものが下記です。<ul class="list-disc"><li>webpackに代わりViteを採用</li><li>CSSフレームワークWindiCSS、AtomicCSSエンジンUnoCSSの導入</li><li>darkmodeを追加。</li><li><a href="https://formkit.com" target="_blank" rel="nofolow">FormKit</a>を試験的に導入。</li></ul>等。',
    },
    {
      question: 'Vue.jsを用いた開発を依頼したい',
      answer:
        '業務のご依頼やご相談は、Phantomoon の「問い合わせフォーム」からお問い合わせください。<br /><a href="https://phantomoon.com/inquiry-2/" target="_blank">お問い合わせ</a>',
    },
  ]
}
