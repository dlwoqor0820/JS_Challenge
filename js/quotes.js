const quotes = [
    {
        "quote" : "궁지에 몰렸을 때만 보이는 길도 있을거야",
        "author" : "늑대와 향신료 - 어떤 아저씨"
    },
    {
        "quote" : "공포는 악이 아니야, 그것은 자신의 약함을 안다는 것이다",
        "author" : "페어리 테일 - 길다트"
    },
    {
        "quote" : "쓰레기는 구별 하지 않으면 안 돼",
        "author" : "진격의 거인 - 에렌 예거"
    },    
    {
        "quote" : "인간은 차별당하기 위해 존재한다. 그렇기에 인간은 싸우며 경쟁하고 진보한다",
        "author" : "코드기어스 - 샤를르 비 브리타니아"
    },
    {
        "quote" : "좋은 칼이라는 건 부러지기는 해도 어중간하게 구부러지지는 않아",
        "author" : "라카와 언더 더 브리지 - 촌장님"
    },
    {
        "quote" : "말은 상처를 준다고! 후회를 해도 주워담을 수가 없어",
        "author" : "마음이 외치고 싶어해 - 준"
    },    
    {
        "quote" : "인생은 살아만 있다면 몇번이든 새 출발 할 수 있으니까",
        "author" : "GTO - 오니즈카"
    },
    {
        "quote" : "진정한 남녀평등 주의자인 나는 여자가 상대라도 드롭킥을 날리는 남자!",
        "author" : "이 멋진 세계에 축복을 - 사토 카즈마"
    },
    {
        "quote" : "여자의 거짓말을 용서 할 줄 아는 게 남자다",
        "author" : "원피스 - 상디"
    },
    {
        "quote" : "마음 먹은 날은 럭키데이, 그렇지 않은 날은 언 럭키 데이",
        "author" : "토리코 - 토리코"
    },
    {
        "quote" : "날개가 없기에 인간은 날아오를 방법을 찾는다",
        "author" : "하이큐 - 우카이 케이신"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
