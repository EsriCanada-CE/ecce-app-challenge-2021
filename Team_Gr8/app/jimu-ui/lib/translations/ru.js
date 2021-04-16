define({
  //common
  iconSize: 'Размер значка',
  showIcon: 'Показать значок',
  vertical: 'Вертикальный',
  horizontal: 'Горизонтальный',
  expand: 'Развернуть',
  space: 'Интервал',
  appearance: 'Оформление',
  textAlign: 'Выравнивание текста',
  alignment: 'Выравнивание',
  type: 'Тип',
  states: 'Состояния',
  textColor: 'Цвет текста',
  background: 'Фон',
  border: 'Рамка',
  borderWidth: 'Ширина границы',
  borderColor: 'Цвет границы',
  borderRadius: 'Радиус рамки',
  boxShadow: 'Тень прямоугольника',
  corner: 'Угол',
  shadow: 'Тень',
  next: 'Следующее',
  handle: 'Handle',
  previous: 'Предыдущее',
  prev: 'Назад',
  step: 'Шаг',
  current: 'Текущий',
  edit: 'Редактировать',
  duplicate: 'Дублировать',
  circle: 'Окружность',
  rectangle: 'Прямоугольник',
  more: 'Больше',
  noContent: 'Нет ресурсов',
  copy: 'Копировать',
  location: 'Местоположение',
  advance: 'Дополнительно',
  reset: 'Сбросить',
  play: 'Воспроизвести',
  pause: 'Пауза',
  inherit: 'Наследовать',
  clear: 'Сбросить',
  quickStyle: 'Быстрый стиль',
  text: 'Текст',
  tooltip: 'Подсказка',
  others: 'Другие',
  optional: 'Дополнительно',
  degree: 'Степень',
  meter: 'Метр',
  meterAbbr: 'm',
  second: 'Секунды',
  symbol: 'Символ',
  complete: 'Завершена',
  incomplete: 'Не завершен',
  active: 'Активный',
  inactive: 'Неактивный',
  show: 'Показать',
  hide: 'Скрыть',
  //chart
  guides: 'Направляющие',
  tools: 'Инструменты',
  //nav
  currentView: 'Текущий вид',
  slider: 'Бегунок',
  thumb: 'Накопитель',
  thumbHandle: 'Управление накопителем',
  // sqlExpression:
  sqlExprIncomplete: 'Выражение SQL неполное. Сначала закончите его.',
  // predefinedValueInValidTip: 'Недопустимые или повторяющиеся значения будут удалены.',
  predefinedValueInValidTip: 'Удалите недопустимые или повторяющиеся значения.',
  builderName: 'Конструктор выражений SQL',
  and: 'AND',
  andLowerCase: 'и',
  or: 'OR',
  orLowerCase: 'или',
  noDataTip: 'Сначала добавьте данные.',
  noClauseTip: 'Нет условия. Добавьте его.',
  clause: 'Условие',
  clauseSet: 'Установка условия',
  addClause: 'Добавить условие',
  addClauseSet: 'Добавить набор условий',
  deleteClause: 'Удалить условие',
  deleteClauseSet: 'Удалить набор условий',
  selectInputEditor: 'Выберите стиль отображения для типа источника',
  //source type
  sourceType: 'Выберите тип источника',
  userInput: 'Ввод пользователя',
  field: 'Поле',
  unique: 'Уникальный',
  single: 'Одиночный',
  multiple: 'Несколько',
  uniquePredefined: 'Уникальное (предварительно заданное)',
  multiplePredefined: 'Несколько (предварительно заданные)',
  //input editor
  textBox: 'Текстовое поле',
  fieldSelector: 'Выбор поля',
  doubleNumberSelector: 'Двойное текстовое поле',
  simpleSelect: 'Ниспадающий список',
  uniquePillWrapSelector: 'Выбор знака',
  // pillInlineSelector: 'Выбор знака',
  // pillBlockSelector: 'Выбор знака',
  multipleSelect: 'Ниспадающий список',
  multiplePillWrapSelector: 'Выбор знака',
  uniquePredefinedLabel: 'Предварительно заданные уникальные значения',
  multiplePredefinedLabel: 'Несколько предварительно заданных значение',
  dateRangeSelector: 'Ниспадающий список',
  blankSelector: 'Ниспадающий список',
  datePicker: 'Выбор даты',
  dateTimePicker: 'Выбор даты/времени',
  doubleDatePicker: 'Выбор двойной даты',
  doubleDateTimePicker: 'Выбор двойной даты времени',
  numberListSelector: 'Выбор из списка чисел',
  selectUnit: 'Выбрать единицы',
  caseSensitive: 'Чувствительный к регистру',
  moreInputSettings: 'Дополнительные входные настройки',
  unAskForValues: 'Отсутствует входной пользователь',
  displayLabel: 'Отобразить подпись',
  askForValues: 'Запросить значения',
  chooseStyle: 'Выбрать входной стиль',
  invalidStyleWarnning: 'Слишком много значений для этого стиля. Попробуйте другой.',
  value: 'Значение',
  label: 'Надпись',
  inlineLabel: 'Размещение подписи: вписать в ту же строку, что и входная',
  separateLabel: 'Размещение подписи: в ту же строку, что и входная',
  hint: 'Подсказка',
  cascade: 'Список значений на основе',
  noneCascadeTip: 'Все уникальные значения этого поля',
  previousCascadeTip: 'Значения предыдущих выражений фильтра',
  allCascadeTip: 'Значения всех остальных выражений фильтра',
  stringOperatorIs: 'равно',
  stringOperatorIsNot: 'не является',
  stringOperatorContains: 'содержит',
  stringOperatorDoesNotContain: 'не содержит',
  stringOperatorStartsWith: 'начинается с',
  stringOperatorDoesNotStartWith: 'не начинается с',
  stringOperatorEndsWith: 'заканчивается на',
  stringOperatorDoesNotEndWith: 'не заканчивается на',
  stringOperatorIsAnyOf: 'любой из',
  stringOperatorIsNoneOf: 'ни один из',
  stringOperatorIsBlank: "является пустым",
  stringOperatorIsNotBlank: "не является пустым",
  numberOperatorIs: 'равно',
  numberOperatorIsNot: 'не является',
  numberOperatorIsAtLeast: 'больше или равно',
  numberOperatorIsAtMost: 'меньше или равно',
  numberOperatorIsLessThan: 'меньше чем',
  numberOperatorIsGreaterThan: 'больше чем',
  numberOperatorIsBetween: 'между',
  numberOperatorIsNotBetween: 'не между',
  numberOperatorIsAnyOf: 'любой из',
  numberOperatorIsNoneOf: 'ни один из',
  numberOperatorIsBlank: "является пустым",
  numberOperatorIsNotBlank: "не является пустым",
  dateOperatorIsOn: 'соответствует',
  dateOperatorIsNotOn: 'не соответствует',
  dateOperatorIsIn: 'в',
  dateOperatorIsNotIn: 'не в',
  dateOperatorIsBefore: "до",
  dateOperatorIsAfter: "после",
  dateOperatorIsOnOrBefore: "соответствует или до",
  dateOperatorIsOnOrAfter: "соответствует или после",
  dateOperatorIsBetween: "между",
  dateOperatorIsInTheLast: "в последние",
  dateOperatorIsNotInTheLast: "не в последние",
  dateOperatorIsNotBetween: "не между",
  dateOperatorIsBlank: "является пустым",
  dateOperatorIsNotBlank: "не является пустым",
  empty: "Пустое",
  today: "Сегодня",
  yesterday: "Вчера",
  tomorrow: "Завтра",
  thisWeek: "эта неделя",
  thisMonth: "этот месяц",
  thisQuarter: "этот квартал",
  thisYear: "этот год",
  year: "Год",
  month: "Месяц",
  week: "Неделя",
  day: "День",
  hour: "Час",
  minute: "Минута",
  equalsForDisplaySQL: '{fieldAlias} = {value}',
  doesNotEqualForDisplaySQL: '{fieldAlias} \u2260 {value}',
  isAtLeastForDisplaySQL: '{fieldAlias} >= {value}',
  isAtMostForDisplaySQL: '{fieldAlias} \'<=\' {value}',
  isLessThanForDisplaySQL: '{fieldAlias} \'<\' {value}',
  isGreaterThanForDisplaySQL: '{fieldAlias} > {value}',
  isBetweenForDisplaySQL: '{fieldAlias} между {value} и {endValue}',
  isNotBetweenForDisplaySQL: '{fieldAlias} не между {value} и {endValue}',
  isAnyOfForDisplaySQL: '{fieldAlias} любой из {value}', //('CA','AK')  (2,3)  (2020-1-1, 2020-1-3)
  isNoneOfForDisplaySQL: '{fieldAlias} ни один из {value}',
  containsForDisplaySQL: '{fieldAlias} содержит {value}',
  doesNotContainForDisplaySQL: '{fieldAlias} не содержит {value}',
  startsWithForDisplaySQL: '{fieldAlias} начинается с {value}',
  doesNotStartWithForDisplaySQL: '{fieldAlias} не начинается с {value}',
  endsWithForDisplaySQL: '{fieldAlias} оканчивается {value}',
  doesNotEndWithForDisplaySQL: '{fieldAlias} не заканчивается на {value}',
  isForDisplaySQL: '{fieldAlias} является {value}',
  isNotForDisplaySQL: '{fieldAlias} не является {value}',
  isOnForDisplaySQL: '{fieldAlias} соответствует {value}',
  isNotOnForDisplaySQL: '{fieldAlias} не соответствует {value}',
  isAtForDisplaySQL: '{fieldAlias} рядом с {value}',
  isNotAtForDisplaySQL: '{fieldAlias} не рядом с {value}',
  isInForDisplaySQL: '{fieldAlias} в {value}',
  isNotInForDisplaySQL: '{fieldAlias} не в {value}',
  isBeforeForDisplaySQL: "{fieldAlias} до {value}",
  isAfterForDisplaySQL: "{fieldAlias} после {value}",
  isOnOrBeforeForDisplaySQL: "{fieldAlias} соответствует или до {value}",
  isOnOrAfterForDisplaySQL: "{fieldAlias} соответствует или после {value}",
  isAtOrBeforeForDisplaySQL: "{fieldAlias} рядом или до {value}",
  isAtOrAfterForDisplaySQL: "{fieldAlias} рядом или после {value}",
  isInTheLastForDisplaySQL: "{fieldAlias} в последние {value} (Количество) {endValue} (Единицы)",
  isNotInTheLastForDisplaySQL: "{fieldAlias} не в последние {value} (Количество) {endValue} (Единицы)",
  amount: 'Количество',
  //advanced select
  showAll: 'Показать все',
  showSelectedOnly: 'Показать только выбранные',
  uncheckAll: 'Снять выделение',
  searchMore: 'Искать больше',
  noData: 'Нет данных',
  allTag: '- Все -',
  linkToString: 'Ссылка на',
  data: 'Данные',
  //style-setting-component
  fill: 'Заполнить',
  image: 'Изображение',
  color: 'Цвет',
  browse: 'Просмотр',
  clearImage: 'Очистить изображение',
  position: 'Положение',
  fit: 'Вписать',
  center: 'Центрировать',
  middle: 'Середина',
  tile: 'Лист',
  stretch: 'Растяжка',
  dashed: 'Штриховая',
  dotted: 'Пунктирная',
  double: 'Двойная',
  solid: 'Сплошной',
  offsetX: 'Сдвиг по X',
  offsetY: 'Сдвиг по Y',
  blurRadius: 'Радиус размытия',
  spreadRadius: 'Радиус разброса',
  T: 'Вверх',
  R: 'Вправо',
  B: 'Вниз',
  L: 'Влево',
  TL: 'Сверху слева',
  TR: 'Сверху справа',
  BR: 'Снизу справа',
  BL: 'Снизу слева',
  TC: 'Сверху в центре',
  ML: 'Посередине слева',
  MC: 'Посередине в центре',
  MR: 'Посередине справа',
  BC: 'Внизу в центре',
  lock: 'Блокировать',
  unlock: 'Разблокировать',
  changeUnit: 'Изменить единицы измерения',
  cornerRadius: 'радиус угла',
  sameRadius: 'Одинаковые радиусы для всех углов',
  differentRadius: 'Разные радиусы для каждого угла',
  //rich-text-editor
  left: 'Влево',
  top: 'Вверх',
  bottom: 'По нижнему краю',
  right: 'Вправо',
  up: 'Вверх',
  down: 'Вниз',
  justify: 'Выровнять по ширине',
  font: 'Шрифт',
  fontSize: 'Размер шрифта',
  convert: 'Конвертировать',
  convertToRem: 'Конвертировать в rem',
  bold: 'Полужирный',
  italic: 'Курсив',
  underline: 'Подчеркнутый',
  strike: 'Зачеркнутый',
  highlight: 'Цвет подсветки',
  fontColor: 'Цвет шрифта',
  ordered: 'Заказано',
  numbering: 'Нумерация',
  bullet: 'Маркеры',
  link: 'Ссылка',
  linkTo: 'Ссылка на',
  characterSpacing: 'Межсимвольный пробел',
  lineSpacing: 'Междустрочный интервал',
  indentLeft: 'Уменьшить отступ',
  indentRight: 'Увеличить отступ',
  normal: 'Обычное',
  h1: 'Заголовок 1',
  h2: 'Заголовок 2',
  h3: 'Заголовок 3',
  h4: 'Заголовок 4',
  h5: 'Заголовок 5',
  h6: 'Заголовок 6',
  clearAllFormats: 'Очистить все форматирование',
  textFormat: 'Формат текста',
  dynamicContent: 'Динамическое содержимое',
  characterEffect: 'Эффект символа',
  //nav styles
  direction: 'Направление',
  style: 'Стиль',
  default: 'По умолчанию',
  tabs: 'Вкладки',
  pills: 'Знак',
  numSelected: '{number} выбрано',
  regular: 'Регулярно',
  hover: 'Навести',
  disabled: 'Отключено',
  views: 'Виды',
  auto: 'Авто',
  custom: 'Пользовательский',
  viewsSelected: '{viewNumber} видов выбрано',
  // expression-builder/expression-builder
  attribute: 'Атрибут',
  statistics: 'Статистика',
  expression: 'Выражение',
  operator: 'Оператор',
  name: 'Имя',
  insert: 'Вставить',
  populatedDataView: 'Автозаполнено',
  selectionDataView: 'Выбранные объекты',
  // expression-builder/expression-editor
  fields: 'Поля',
  functions: 'Функции',
  invalidExpression: 'Неправильное выражение',
  // expression-builder/expression-input
  static: 'Статический',
  // link-setting
  openIn: 'Открыть в',
  appWindow: 'Окне приложения',
  topWindow: 'Окне поверх',
  newWindow: 'Новом окне',
  webAddress: 'Веб-адрес',
  none: 'Нет',
  chooseAPage: 'Выбрать страницу',
  chooseADialog: 'Выберите окно',
  chooseViews: 'Выбрать виды',
  setLink: 'Задать ссылку',
  setLinkForTitle: 'Задать ссылку для {title}',
  currentPage: 'Текущая страница',
  invalidUrlMessage: 'Неверный URL-адрес. Проверьте и повторите попытку.',
  httpsUrlMessage: 'Поддерживается только HTTPS.',
  websitePlaceholder: 'Введите URL-адрес (только HTTPS)',
  // proxy-setting
  subscriberContents: 'Ресурсы подписчика',
  subscriberWarning: 'Для некоторых ресурсов, используемых в этом примере, требуется подписка ArcGIS. Включите публичный доступ, авторизовавшись с помощью своей подписки. Имейте в виду, что некоторые ресурсы потребляют кредиты.',
  requestLimit: 'Лимит запроса',
  requestInterval: 'Интервальные',
  intervalNone: 'Нет',
  intervalSecond: 'Секунды',
  intervalMinute: 'Минута',
  intervalHour: 'Час',
  intervalDay: 'День',
  authorized: 'Авторизовано',
  subscriberContent: 'Ресурсы подписки',
  credits: 'Кредиты',
  disabledProxyTooltip: 'Текущая учетная запись счет не имеет подписки на этот ресурс.',
  //components/sort
  ascending: 'По возрастанию',
  decending: 'По убыванию',
  optionNamePlaceholder: 'Введите название опции.',
  addOption: 'Добавить опцию',
  option: 'Опция',
  addSortBtntext: 'Добавить поле сортировки',
  noOptionRemindText: 'Опций нет.',
  noSortRemindText: 'Поля сортировки отсутствуют',
  pleaceAddOne: 'Добавьте одну.',
  deleteOption: 'Удалить',
  // data-source-selector
  featureLayer: 'Векторный слой',
  featureSet: 'Набор объектов',
  featureService: 'Сервис объектов',
  mapService: 'Картографический сервис',
  groupLayer: 'Составной слой',
  hubAnnotations: 'Аннотации Hub',
  hubEvents: 'События Hub',
  map: 'Карта',
  simpleLocal: 'Простая локальная',
  webMap: 'Веб-карта',
  webScene: 'Веб-сцена',
  csv: 'CSV',
  sceneService: 'Сервис сцены',
  sceneLayer: 'Слой сцены',
  filter: 'Фильтр',
  records: 'Записи',
  pageSize: 'Размер страницы',
  maximum: 'Максимум',
  maximumRecordCount: 'Максимальное число записей',
  dataView: 'Вид данных',
  applyChanges: 'Применить изменения',
  anArcGISServerWebService: 'Веб-сервис ArcGIS Server',
  layer: 'Слой',
  maximumLimitationWarning: 'Настройка Максимум не используется в виджете карты.',
  dataViewForNoSelection: 'Просмотр пустой выборки',
  dataViewForNoSelectionHint: 'Включение этой опции отобразит значения объектов в этом виде, где используется вид выбранных объектов, но пока ни одного объекта не выбрано.',
  disable: 'Отключить',
  enable: 'Включить',
  relatedWidgetsWithNum: 'Связанные виджеты: {directlyNum} (Напрямую) / {totalNum} (Всего)',
  relatedWidgetsWithDirectlyNum: 'Связанные виджеты: {num}',
  containLayersWithNum: 'Слои: {layerNum}',
  addDataByUrlHint: 'Поддерживаются только сервис объектов, картографический сервис и сервис сцены с https.',
  source: 'Источник',
  settings: 'Установки',
  home: 'На главную',
  widgets: 'Виджеты',
  mapping: 'Картография',
  layers: 'Слои',
  createAView: 'Создание представления.',
  rename: 'Переименовать',
  affectedWidgets: 'Данные используются в следующих виджетах, и их удаление может их повредить.',
  removeDataSource: 'Удалить данные',
  youAreRemovingData: 'Вы удаляете данные:',
  howToRemoveWidgetsTip: 'Выберите виджет, для которого вы хотите удалить данные. Не выбранные виджеты будут сохранены, и вы сможете перенастроить их позже.',
  relatedWidgets: 'Связанные виджеты',
  clickToHide: 'Щелкните чтобы скрыть',
  clickToShow: 'Щелкните, чтобы показать',
  // data-source-selector/data-source-selector
  connectToData: 'Подключение к данным',
  setDataSource: 'Выбрать данные',
  addNewData: 'Добавить новые данные',
  pleaseAddData: 'Добавьте данные.',
  added: 'Добавлено',
  outputs: 'Выходные данные',
  noAddedDataSourceCanBeUsed: 'Добавленные данных использовать нельзя.',
  noSelectedType: 'Нет выбранного типа.',
  noDataTypeInTheApp: 'Нет {dataType} в приложении.',
  noWidgetOutputOfDataType: 'Нет выходных данных виджета типа {dataType}.',
  noWidgetOutputCanBeUsed: 'Выходные данные виджета использовать нельзя.',
  all: 'Все',
  // data-source-selector/external-data-source-selector
  selectData: 'Выбрать данные',
  addData: 'Добавить данные',
  serviceType: 'Тип сервиса',
  url: 'URL',
  add: 'Добавить',
  appData: 'Данные приложения',
  done: 'Готово',
  undone: 'Отменено',
  hub: 'Hub',
  unSupported: 'Не поддерживается',
  selected: 'Выбрано',
  pleaseSelectData: 'Выберите данные',
  folder: 'Папка',
  remove: 'Убрать',
  allMyContent: 'Все мои ресурсы',
  allMyGroupsContent: 'Все ресурсы моих группы',
  rootFolder: 'Корневая папка',
  addDataErrorInvalidSceneLayer: 'Слой сцены без связанного векторного слоя не поддерживается.',
  creatProxyToPublishAppError: 'Опубликовать не удалось. Не удается создать прокси для ресурсов подписчика. Повторите попытку позже или измените авторизацию.',
  // item-selector/item-selector
  sort: 'Сортировка',
  sortBy: 'Сортировать по',
  sorting: 'Сортировка',
  modified: 'Изменено',
  title: 'Заголовок',
  numViews: 'Просмотреть количество',
  myContent: 'Мои ресурсы',
  myOrganization: 'Моя организация',
  myGroup: 'Мои группы',
  public: 'ArcGIS Online',
  livingAtlas: 'Living Atlas',
  noItemFoundWarning: 'Мы не смогли найти то, что вы искали. Попробуйте другие варианты.',
  // item-selector/item-detail
  details: 'Подробная информация',
  description: 'Описание',
  // item-selector/data-badge
  authoritativeBadgeTooltip: 'Рекомендовано Esri',
  livingAtlasBadgeTooltip: 'Рекомендованный Esri ресурс',
  subscriberBadgeTooltip: 'Эксклюзивные ресурсы для подписчиков',
  premiumBadgeTooltip: 'Эксклюзивные ресурсы для подписчиков. Расходует кредиты.',
  // alert-popup
  commonModalOk: 'OK',
  commonModalCancel: 'Отмена',
  owner: 'Владелец',
  updated: 'Обновлено',
  // image-selector
  setAnImage: 'Выбрать изображение',
  localImage: 'Локальное',
  urlImage: 'URL',
  uploadImage: 'Загрузить',
  nextStepForImage: 'Следующее',
  urlIsHereForImage: 'Введите URL здесь',
  uploadImageError: 'Ошибка',
  imageTypeError: 'Вы указали тип изображения, который не поддерживается. Используйте один из этих типов: PNG, GIF, JPG, JPEG, BMP, SVG или SVGZ.',
  // theme-components
  padding: 'Внутренний отступ',
  //theme-components/theme-selector
  waitForThemeList: 'Получение списка тем...',
  //theme-components/theme-quickstyler
  themeSectionColor: 'Цвет',
  themeSectionFont: 'Шрифт',
  themeSettingThemeColors: 'Цвета темы',
  themeSettingThemeColorsDescription: 'Измените внешний вид приложения, настроив цвета темы. Если вы измените эти цвета здесь, они будут отображаться везде, где используются',
  themeSettingThemeColorAdvanced: 'Дополнительные настройки цвета',
  themeSettingColorMode: 'Цветовой режим',
  themeSettingColoration: 'Расцвечивание',
  themeSettingAppElements: 'Элементы приложения',
  themeSettingAppElementsDescription: 'Задать особые цвета для основного текста, верхнего и нижнего колонтитулов.',
  themeSettingAppElementsDescription2: 'Цвета на панели настроек страницы имеют приоритет.',
  themeSettingThemeFont: 'Шрифт темы',
  themeSettingThemeFontset: 'Набор шрифтов темы',
  themeSettingSize: 'Размер',
  themeLight: 'Светлая',
  themeDark: 'Темная',
  themeColorationMinimal: 'Минимальная',
  themeColorationDefault: 'По умолчанию',
  themeColorLighter: 'Светлее',
  themeColorLightest: 'Самая светлая',
  themeColorDarker: 'Темнее',
  themeColorDarkest: 'Самая темная',
  ThemeBrandColors: 'Цвета бренда',
  ThemeAlertColors: 'Изменить цвета',
  ThemeNeutualColors: 'Нейтральные цвета',
  themeFontDummyHeading: 'Заголовок',
  themeFontDummyParagraph: 'Lorem ipsum dolor sitamet, tur adipiscing elit...',
  themeSettingShowShadows: "Показать тени",
  //theme-components/fontset-configurator
  themeHeadingTitle: 'Заголовок',
  themeBodyTitle: 'Содержание',
  //theme-components/inputs/
  useSharedTheme: 'Показать тени',
  sharedThemeOrgNamePrefix: 'Общая тема из:',
  saveAs: 'Сохранить как',
  variableColorPrimary: 'Главная',
  variableColorSecondary: 'Вторичные',
  variableColorLight: 'Светлая',
  variableColorDark: 'Темная',
  variableColorSuccess: 'Успешно',
  variableColorInfo: 'Инфо',
  variableColorWarning: 'Предупреждение',
  variableColorDanger: 'Опасность',
  variableColorBlack: 'Черный',
  variableColorWhite: 'Белый',
  variableColorTransparent: 'Прозрачный',
  variableTypography: 'Шрифтовое оформление',
  variableBg: 'Фон',
  variableColor: 'Текст',
  variableFontFamilyBase: 'Семейство шрифтов',
  variableFontSizeBase: 'Размер основного шрифта',
  variableHeader: 'Верхний колонтитул',
  variableBody: 'Содержание',
  variableFooter: 'колонтитул',
  variableLink: 'Ссылка',
  variableButton: 'Кнопка',
  variablePrimaryButton: 'Основная кнопка',
  variableDefaultButton: 'Кнопка по умолчанию',
  variableSuefaces: 'Поверхности',
  variableCustomPalette: 'Настройка цветов палитры',
  variableCustomFontset: 'Настройка набора шрифтов',
  variableDescriptionPrimary: 'используется для представления основного UI элементов, активных состояний или интерактивных разделов',
  variableDescriptionSecondary: 'дополнительный цвет, используемый для подчеркивания основного цвета, соответствующего вашему бренду.',
  variableDescriptionInfo: 'используется для представления основной информации.',
  variableDescriptionSuccess: 'используется для представления состояния успешности, например, завершения процесса или прохождения проверки.',
  variableDescriptionWarning: 'используется для представления состояния хода действия, или информации предупреждения, которую нужно зафиксировать.',
  variableDescriptionDanger: 'используется для представления состояния неудачи, или состояния, требующего внимания пользователя.',
  variableDescriptionLight: 'в основном используется для представления фона или контуров элементов компоновки, например, контейнеров или разделителей.',
  variableDescriptionDark: 'в основном используются для представления текста.',
  variableDescriptionHeader: 'Раздел заголовка всех страниц вашего приложения.',
  variableDescriptionBody: 'Раздел основного содержания всех страниц вашего приложения.',
  variableDescriptionFooter: 'Раздел нижнего колонтитула всех страниц вашего приложения.',
  variableDescriptionSurfaces: 'Поверхности, такие как контейнеры или панели, в вашем приложении.',
  variableAddCustomFont: 'Добавить пользовательский шрифт',
  variableChangeCustomFont: 'Изменить пользовательский шрифт',
  variableAddCustomFontNote: 'В настоящий момент можно добавить только один пользовательский шрифт.',
  variableHeaderBackground: 'Фон заголовка',
  variableHeaderText: 'Текст заголовка',
  variableButtonBackground: 'Фон кнопки',
  variableButtonText: 'Текст кнопки',
  variableBodyBackground: 'Фон содержания',
  variableBodyText: 'Текст содержания',
  variableLinks: 'Линки',
  // icon-picker
  setIcon: 'Выбрать значок',
  iconViewerModalTitle: 'Выбрать значок',
  removeIcon: 'Удалить значок',
  myIcons: 'Мои значки',
  IconGroup_general: 'Общее',
  IconGroup_arrows: 'Стрелки',
  iconBackground: 'Фон значка',
  //color-picker
  themeColor: 'Цвета темы',
  customColor: 'Пользовательские цвета',
  moreColor: 'Другие цвета',
  customize: 'Пользовательский',
  recentColor: 'Последние цвета',
  standard: 'Стандартная',
  standardColor: 'Стандартные цвета',
  noColor: 'Нет цвета',
  orgColors: 'Цвета организации',
  themeColorTip: 'Выберите цвет из темы',
  sharedThemeColorTip: 'Выберите цвет, заданный в общей теме организации',
  standardColorTip: 'Выбрать цвет из стандартных опций. Использование этой опции будет закреплено и при смене темы применено не будет. ',
  recentColorTip: 'Установите определенный цвет для использования, щелкнув Другие опции ниже. Последние 8 настроенных цветов будут сохранены. Также пользовательские цвета не будут изменены при смене темы.',
  select: 'Выбрать',
  clearColor: 'Очистить цвет',
  //qr-code
  qrCodeSaveBtnLabel: 'Сохранить как изображение',
  width: 'Ширина',
  height: 'Высота',
  //profile
  myProfile: 'Мой профиль',
  accountHelp: 'Справка',
  switchAccount: 'Переключить учетные записи',
  signOut: 'Выход из системы',
  signIn: 'Войти в',
  arcgisBlog: "Блог ArcGIS",
  mySettings: "Мои настройки",
  communityAndForums: "Сообщество и форумы",
  myesri: "My Esri",
  training: "Обучение",
  profileLeave: 'Покинуть',
  profileLeaveSite: 'Покинуть сайт?',
  profileLeaveDescription: 'Сделанные вами изменения могут быть не сохранены.',
  //share
  share: 'Общий доступ',
  sharelink: 'Поделиться ссылкой',
  email: 'Email',
  embed: 'Встроить',
  facebook: 'Facebook',
  qrcode: 'QR-код',
  twitter: 'Twitter',
  pinterest: "Pinterest",
  linkedin: "Linkedin",
  //jimu-map
  mapFailure: 'Не удалось создать карту.',
  mapCrash: "Карта не может быть открыта, так как число карт, открытых в приложении достигло максимального значения, предусмотренного производительностью.",
  mapRecover: 'Перезагрузка',
  ZoomLabel: 'Масштабировать',
  HomeLabel: 'На главную',
  NavigationLabel: 'Навигация',
  LocateLabel: 'Найти местоположение',
  CompassLabel: 'Компас',
  SearchLabel: 'Поиск',
  LayersLabel: 'Слои',
  BaseMapLabel: 'Базовая карта',
  MeasureLabel: 'Измерение',
  FullScreenLabel: 'Полноэкранный режим',
  ScaleBarLabel: 'Масштабная линейка',
  LayersLabelLayer: 'Слой',
  LayersLabelLegend: 'Легенда',
  LegendLabel: 'Легенда',
  SelectLabel: 'Выбрать',
  SelectionTool: 'Инструмент выборки',
  SelectionToolRectangle: 'Прямоугольник',
  SelectionToolLasso: 'Лассо',
  SelectionToolCircle: 'Круг',
  SelectionToolLine: 'Линия',
  SelectionToolPoint: 'Точка',
  SelectionMode: 'Режим выборки',
  SelectionWithin: 'Частично или полностью в пределах',
  SelectionContain: 'Полностью содержится в',
  SelectionZoomTo: 'Приблизить к',
  SelectionSeleted: 'выбрано',
  SelectionActions: 'Действия',
  SelectionFeaturesSelected: 'Объектов выбрано',
  SelectionSelectedFeatures: 'Выбранные объекты',
  SelectionZoomToSelectedFeatures: 'Приблизить к выбранным объектам',
  SelectionByRectangle: 'Выбрать прямоугольником',
  SelectionByLasso: 'Выбрать лассо',
  SelectionByLine: 'Выбрать линией',
  SelectionByPoint: 'Выбрать точкой',
  SelectionByCircle: 'Выбрать окружностью',
  SelectionByPolygon: 'Выбрать полигоном',
  //draw component
  drawToolPreview: 'Предварительный просмотр',
  drawToolSource: 'Источник',
  drawToolOpacity: 'Непрозрачный',
  drawToolStyles: 'Стиль отображения',
  drawToolDash: 'Штрихи',
  drawToolDashDot: 'Штрих-пунктир',
  drawToolDot: 'Точка',
  drawToolLongDash: 'Длинное тире',
  drawToolLongDashDot: 'Длинное тире – точка',
  drawToolLongDashDotDot: 'Длинное тире – точка - точка',
  drawToolShortDash: 'Короткое тире',
  drawToolShortDashDot: 'Короткое тире – точка',
  drawToolShortDashDotDot: 'Короткое тире – точка – точка',
  drawToolShortDot: 'Короткая точка',
  drawToolSolid: 'Сплошная',
  //status-bar
  fixedWindows: 'Зафиксированные окна',
  anchoredWindows: 'Закрепленные окна',
  zoomIn: 'Приблизить',
  zoomOut: 'Отдалить',
  zoomToFit: 'Подогнет ширину под текущее окно',
  openSettingPanel: 'Открыть панель настроек',
  closeSettingPanel: 'Закрыть панель настроек',
  switchPage: 'Переключить страницу',
  // setting component
  basic: 'Базовый',
  //tag-input component
  noTagMatch: 'нет существующих сопоставлений {lableName}.',
  addTag: 'Добавить{lableName}',
  tag: 'тег',
  // guide tour component
  closeTour: 'Закрыть',
  skipTour: 'Пропустить',
  startTour: 'Начать тур',
  finishTour: 'Завершить',
  openTour: 'Открыть тур',
  actionRequired: 'Действие необходимо.',
  errorCannotFindNextStep: 'Не удалось найти следующий шаг. Следуйте рекомендациям и попробуйте еще раз.',
  //_link-tip
  linkPreviewTip: 'Эта ссылка будет работать в предварительном просмотре.',
  // guide related strings
  // guide opening guide
  openingGuideStep1Title: 'Приступая к работе',
  openingGuideStep1Content: 'Этот тур покажет вам, как выполнять навигацию в Experience Builder',
  openingGuideStep2Title: 'Канва',
  openingGuideStep2Content: 'Вы можете взаимодействовать с виджетами в своем визуальном интерфейсе, размещая их на канве',
  openingGuideStep3Title: 'Боковая панель',
  openingGuideStep3Content: 'Позволяет открыть панель виджета, страницы, данных или темы.',
  openingGuideStep4Title: 'Вставить виджет',
  openingGuideStep4Content: 'Щелкните виджет Карта и перетащите его на канву',
  openingGuideStep5Title: 'Изменить размер виджета',
  openingGuideStep5Content: 'Вы можете изменить размер виджета на канве.',
  openingGuideStep7Title: 'Стиль',
  openingGuideStep7Content: 'Щелкните вкладку Стиль для переключения панели настроек стиля.',
  openingGuideStep8Title: 'Размер и положение',
  openingGuideStep8Content: 'Нажмите кнопку Полный размер в правом верхнем углу.',
  openingGuideStep8Title2: 'Стиль',
  openingGuideStep8Content2: 'Позволяет настроить свойства, такие как размер, расположение, фон, анимация, граница и преобразование.',
  openingGuideStep9Title: 'Действие',
  openingGuideStep9Content: 'Щелкните вкладку Действие для переключения панели настроек действий.',
  openingGuideStep10Title: 'Действие',
  openingGuideStep10Content: 'Взаимодействия между виджетами, можно настраивать, используя действия и триггеры. Действия с виджетами выполняются в ответ на действия триггеров в других виджетах.',
  openingGuideStep11Title: 'Заголовок',
  openingGuideStep11Content: 'Щелкните Вид в реальном времени, чтобы сделать интерфейс интерактивным в пределах конструктора.',
  openingGuideStep12Title: 'Страница',
  openingGuideStep12Content: 'Показывает структуру интерфейса. Вы можете создать и организовать страницы и папки, и изменить настройки страниц.',
  openingGuideStep13Title: 'Данные',
  openingGuideStep13Content: 'Показывает все данные, перечисленные в вашем интерфейсе, и виджеты, связанные с данными.',
  openingGuideStep14Title: 'Тема',
  openingGuideStep14Content: 'Задает цветовую схему для внешнего вида вашего интерфейса.',
  openingGuideStep15Title: 'Окончание тура',
  openingGuideStep15Content: 'Вы всегда можете вернуться, если необходимо.',
  // guide what's new
  whatsNewStep1Title: 'Что нового',
  whatsNewStep1Content: 'Здесь представлены последние функциональные возможности Experience Builder.',
  whatsNewStep2Title: 'Новое: Языковая поддержка ',
  whatsNewStep2Content: 'Добавлен словацкий для использования в качестве основного языка.',
  whatsNewStep3Title: 'Виджет Опрос',
  whatsNewStep3Content: 'Добавлена поддержка предварительного просмотра опроса перед публикацией.',
  whatsNewStep4Title: 'Ресурсы подписки',
  whatsNewStep4Content: 'Добавлена возможность доступа к авторизованным ресурсам подписчика при публикации шаблона.',
  whatsNewStep13Title: 'Посмотреть все новые функции',
  whatsNewStep13Content: 'Подробнее',
  // guide datasource selection
  DSSelectionStep1Title: 'Виджет Содержание',
  DSSelectionStep1Content: 'Щелкните Выбрать карту, чтобы добавить новый источник данных.',
  DSSelectionStep2Title: 'Добавить новые данные',
  DSSelectionStep2Content: 'Щелкните Добавить новые данные и выберите веб-карту для источника данных.',
  DSSelectionStep3Title: 'Выбрать данные',
  DSSelectionStep3Content: 'Щелкните веб-карту на панели выбора данных.',
  DSSelectionStep4Title: 'Виджет Содержание',
  DSSelectionStep4Content: 'Щелкните Выбрать данные, чтобы добавить новый источник данных.',
  DSSelectionStep5Title: 'Выбрать данные',
  DSSelectionStep5Content: 'Щелкните векторный слой на выбранной панели данных.',
  // guide insert widget
  insertWidgetStep1Title: 'Вставить виджет',
  insertWidgetStep1Content: 'Щелкните виджет и перетащите его на канву.',
  // animation
  animation: 'Анимация',
  maskColor: 'Цвет маски',
  trigger: 'Триггер',
  help: 'Справка',
  in: 'Внутрь',
  out: 'Наружу',
  fade_in: 'Проявление',
  fade_out: 'Затемнение',
  fly_in: 'Влет',
  fly_out: 'Вылет',
  zoom_in: 'Увеличение',
  zoom_out: 'Уменьшение',
  wipe_in: 'Выцветание',
  wipe_out: 'Нанесение',
  spin_in: 'Вращение влево',
  spin_out: 'Вращение вправо',
  float_in: 'Плавный вход',
  float_out: 'Плавный выход',
  playAnimation: 'Проиграть анимацию',
  asOneObject: 'Как объект',
  widgetByWidget: 'Содержит виджет',
  scrollIntoView: 'Прокрутить внутрь вида',
  animationFrom: 'Анимация от',
  gentle: 'Мягко',
  wobbly: 'Резко',
  stiff: 'Жестко',
  slow: 'Медленно',
  molasses: 'Вытекание',
  preview: 'Предварительный просмотр',
  change: 'Изменить',
  // transitions
  transition: 'Переход',
  effect: 'Эффект',
  cover: 'Обложка',
  cube: 'Куб',
  fade: 'Проявление',
  push: 'Отправка',
  box: 'Рамка',
  multiPages: 'Несколько страниц',
  // screen group
  addScreen: 'Добавить экран',
  mainStage: 'Основное рабочее поле',
  scrollingPanel: 'Панель прокрутки',
});