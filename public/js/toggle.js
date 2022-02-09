const currentDate = function() {
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const currDate = new Date(Date.now() + KR_TIME_DIFF);

    return (currDate.toISOString().replaceAll('-','').slice(0,8))
}
console.log(currentDate())
$('.airline-list').click(function(e){
    $(this).children().removeClass('active')
    $(this).children(`li:contains(${e.target.innerText})`).toggleClass('active');
})

$('.airline-list').click((e) => {
    const airline = e.target.id;
    $.ajax({
        url: "/airline",
        data: { 
            airline: airline,
            date: currentDate()
        },
        method: "GET"
    })
    .done( ({ records }) => {
        const $tbody = document.querySelector('tbody');
        const $fragment = document.createDocumentFragment();
        $tbody.innerHTML = '';

        records = records.filter(item => item.eta !== null);
        records.forEach( record => {
            const { fpId, apIcao, apArr, acId, acType, etd, eta } = record;

            const $tr = document.createElement('tr');
            $tr.innerHTML = `<td>${fpId.slice(3)}</td>
            <td>${apIcao}</td>
            <td>${apArr}</td>
            <td>${acId !==null ? acId : ' - ' } / ${acType}</td>
            <td>${currentDate().slice(6,8)}${etd}Z</td>
            <td>${currentDate().slice(6,8)}${eta}Z</td>`;
            $fragment.appendChild($tr);
        });

        $tbody.appendChild($fragment);
    })
})