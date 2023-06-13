# Naver_Cafe_Auto_Scroll_for_Fullscreenchange
네이버 카페 (https://cafe.naver.com/*) 에 적용되는 크롬 확장프로그램입니다. (it is a chrome extension for Naver Cafe Only)

네이버 카페에서 동영상을 전체화면으로 이용시, 스크롤이 원치 않는 곳으로 이동하는 문제를 해결합니다.

영상의 전체화면 종료시, 재생되던 영상의 프레임이 화면 중앙으로 이동합니다.

이를 통해 스크롤을 다시 내려야하는 불편함을 감소시킬 수 있습니다. 영상을 포함한 긴 글이나 클립, 영상 모음과 같은 글을 읽을 때 효과적이빈다.

네이버 카페 내의 네이버 동영상 혹은 임베디드 플레이어에 적용됩니다.

p.s. 영상이 화면 중앙으로 이동하도록 만들어 둔 이유: 
1. 사용자가 영상을 시청함에 있어 어떤 영상을 보고 있었는 지에 대한 가시성 향상이 가능할 거 같아 화면 중앙으로 이동할 수 있게 만들었습니다.
2. 전체화면 되기 직전의 위치로 이동하기 위해서는 스크롤 이벤트 필요한데, 성능이 저하될 가능성이 있다고 판단하였습니다.
3. 이에 따라 코드의 길이를 최소화하고 발생할 수 있는 성능 감소를 최소화하기 위해 스크롤 이벤트를 추가하지 않았습니다.

## How to use?
크롬 웹스토어에서 "네이버 카페 전체화면 스크롤"을 chrome에 추가하시면 바로 적용됩니다.

https://chrome.google.com/webstore/detail/ncpmjjjpjejpmkcakanhjnghpbddcajo?authuser=0&hl=ko


## History
1.0.0.1 Extension Released
 
1.0.1.1 Icon Updated, Icon Error Fixed

1.0.1.2 Icon(16X16) resized

1.0.2.1 code optimization
