$('.airline-list').click(function(e){
    $(this).children().removeClass('active')
    $(this).children(`li:contains(${e.target.innerText})`).toggleClass('active');
})

// 각 항공사별 운항편 가져오기
// 
// 1. 항공사를 선택하면
// 2. 선택한 li 태그의 text값에 대응되는 항공사코드를 만든뒤
// 3. 해당 코드를 유비카이스 Flight Number에 넣고
// 4. SEARCH 버튼을 눌러서 정렬된 표 데이터를
// 5. array로 가져와주세요