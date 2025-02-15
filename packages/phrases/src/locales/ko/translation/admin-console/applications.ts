const applications = {
  page_title: '어플리케이션',
  title: '어플리케이션',
  subtitle:
    '인증에 Logto를 사용할 모바일, 단일 페이지, Machine-to-Machine 또는 기존 어플리케이션을 설정할 수 있어요.',
  subtitle_with_app_type: 'Set up Logto authentication for your {{name}} application', // UNTRANSLATED
  create: '어플리케이션 생성',
  application_name: '어플리케이션 이름',
  application_name_placeholder: '나의 앱',
  application_description: '어플리케이션 설명',
  application_description_placeholder: '어플리케이션 설명을 적어주세요.',
  select_application_type: '어플리케이션 종류 선택',
  no_application_type_selected: '어플리케이션 종류를 선택하지 않았어요.',
  application_created: '어플리케이션이 성공적으로 생성되었어요.',
  app_id: '앱 ID',
  type: {
    native: {
      title: 'Native App',
      subtitle: 'Native 환경에서 작동하는 어플리케이션',
      description: '예) iOS, Android 앱',
    },
    spa: {
      title: 'Single Page App',
      subtitle: '웹 브라우저에서 작동하며, 한 페이지에서 유동적으로 업데이트 되는 웹',
      description: '예) React DOM, Vue 앱',
    },
    traditional: {
      title: 'Traditional Web',
      subtitle: '서버를 통하여 웹 페이지가 업데이트 되는 앱',
      description: '예) JSP, PHP',
    },
    machine_to_machine: {
      title: 'Machine-to-Machine',
      subtitle: '직접 리소스에 접근하는 엡(서비스)',
      description: '예) 백엔드 서비스',
    },
  },
  guide: {
    header_title: 'Select a framework or tutorial', // UNTRANSLATED
    modal_header_title: 'Start with SDK and guides', // UNTRANSLATED
    header_subtitle: 'Jumpstart your app development process with our pre-built SDK and tutorials.', // UNTRANSLATED
    start_building: 'Start Building', // UNTRANSLATED
    categories: {
      featured: 'Popular and for you', // UNTRANSLATED
      Traditional: 'Traditional web app', // UNTRANSLATED
      SPA: 'Single page app', // UNTRANSLATED
      Native: 'Native', // UNTRANSLATED
      MachineToMachine: 'Machine-to-machine', // UNTRANSLATED
    },
    filter: {
      title: 'Filter framework', // UNTRANSLATED
      placeholder: 'Search for framework', // UNTRANSLATED
    },
    select_a_framework: 'Select a framework', // UNTRANSLATED
    checkout_tutorial: 'Checkout {{name}} tutorial', // UNTRANSLATED
    get_sample_file: '예제 찾기',
    title: '어플리케이션이 생성되었어요.',
    subtitle: '앱 설정을 마치기 위해 아래 단계를 따라주세요. SDK 종류를 선택해 주세요.',
    description_by_sdk: '아래 과정을 따라서 Logto를 {{sdk}} 앱과 빠르게 연동해 보세요.',
    do_not_need_tutorial:
      'If you don’t need a tutorial, you can continue without a framework guide', // UNTRANSLATED
    create_without_framework: 'Create app without framework', // UNTRANSLATED
    finish_and_done: '끝내기',
    cannot_find_guide: "Can't find your guide?", // UNTRANSLATED
    describe_guide_looking_for: 'Describe the guide you are looking for', // UNTRANSLATED
    describe_guide_looking_for_placeholder: 'E.g., I want to integrate Logto into my Angular app.', // UNTRANSLATED
    request_guide_successfully: 'Your request has been successfully submitted. Thank you!', // UNTRANSLATED
  },
  placeholder_title: '애플리케이션 유형을 선택하여 계속하세요',
  placeholder_description:
    'Logto는 OIDC용 애플리케이션 엔티티를 사용하여 앱 식별, 로그인 관리 및 감사 로그 생성과 같은 작업을 지원합니다.',
};

export default Object.freeze(applications);
