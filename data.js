// Easy Cook - 데이터 및 기본 설정 파일

// 1. 기본 양념 목록
const DEFAULT_CONDIMENTS = [
    { id: "salt", name: "소금" },
    { id: "sugar", name: "설탕" },
    { id: "soy_sauce", name: "간장" },
    { id: "gochujang", name: "고추장" },
    { id: "doenjang", name: "된장" },
    { id: "oil", name: "식용유" },
    { id: "garlic", name: "다진 마늘" },
    { id: "sesame_oil", name: "참기름" },
    { id: "pepper", name: "후추" },
    { id: "ketchup", name: "케첩" }
];

// 2. 보유 조리 도구 목록
const DEFAULT_APPLIANCES = [
    { id: "stove", name: "가스/인덕션", checked: true },
    { id: "microwave", name: "전자레인지", checked: false },
    { id: "airfryer", name: "에어프라이어", checked: false },
    { id: "oven", name: "오븐", checked: false }
];

// 3. AI 프롬프트 생성 함수
function generatePrompt(condiments, appliances) {
    return `
너는 자취생 및 1인 가구를 위한 Easy Cook의 AI 셰프야.
사진 속에 있는 식재료들을 정확하게 인식해 줘.

[사용자 보유 상태]
- 보유 양념/조미료: ${condiments || '없음'}
- 보유 조리 도구: ${appliances || '가스레인지'}

[요청 사항]
1. 사진 속 식재료 목록을 파악해서 알려줘.
2. 사진의 식재료와 보유한 양념/도구만 활용해서 만들 수 있는 현실적인 요리 레시피 2가지를 추천해 줘.
3. 추가로 사야 하는 재료는 없거나 최소화하고, 필수 양념이 부족하면 대체할 수 있는 팁을 적어줘.
4. 조리 순서는 번호를 붙여 알기 쉽게 설명해 줘.
`;
}
