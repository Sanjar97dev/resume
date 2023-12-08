const h1 =document.querySelector('h1')
const input = document.querySelector('input')
const visit = document.querySelector('ol')

const users = [
    {firstName:'Жусуп', surname:'Абдырахманов', kesip:'Кыргыз Совет мамлекетинин биринчи төрагасы, саясий ишмер ', img:'https://upload.wikimedia.org/wikipedia/commons/4/4a/Portrait_of_Jusup_Abdrakhmanov.jpg', bio: 'Кыргыз эл баатыры. Абдрахман уулу Жусуп (Юсуп) (1901, Күнгөй-Аксуу болушу, Чиркей кыштоосу, азыркы Ысык-Көл району, Жаркымбаев айылы — 1938, Бишкек, сөөгү 1991 Ата-бейит көрүстөнүнө коюлган) — советтик жана кыргыз мамлекеттик ишмери, Кыргыз АССРинин Эл Комиссарлар Советининин биринчи Председатели(1927—1933), РСФСР ВЦИКтин мүчөсү, СССР ЦИК Президиумунун мүчөлүгүнө кандидат, ВКП(б)БКнын Орто Азия бюросунун мүчөлүгүнө кандидат, эл тарыхын объективдүү изилдөөчү.'},
    {firstName:'Максатбек', surname:'Токтомушев', kesip:'Ислам фикх', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcruyxaBv0GyYxD4uEvSBIa74O8qNnTCksTbqkMPA2NrcmmeGfMVcWgQSQuIp16HOCqk&usqp=CAU', bio: 'Максатбек ажы Токтомушев Максатбек ажы Токтомушев 1973-жылы 9-августта Ош облусунун Кара-Кулжа районундагы Кара-Кулжа айылында  төрөлгөн.Билими:1991-1995 — Айыл чарба институтунда зооинженер адистиги боюнча билим алган.1997-2003 — Ханафий мазхабы боюнча Пакистандагы «Аль-Арабия» университетин артыкчылык диплому менен аяктаган.2010 — Ислам экономикасы жана банктык иш боюнча билимин жогорулаткан.'},
    {firstName:'Нурак', surname:'Абдырахманов', kesip:'Комузчу',  img:'https://upload.wikimedia.org/wikipedia/ky/thumb/f/fc/%D0%9D%D1%83%D1%80%D0%B0%D0%BA_%D0%90%D0%B1%D0%B4%D1%80%D0%B0%D1%85%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2_-_%D0%A2%D0%BE%D0%BA%D1%82%D0%BE%D0%B3%D1%83%D0%BB%D0%B4%D1%83%D0%BD_%D0%9A%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%B8.webm/640px--%D0%9D%D1%83%D1%80%D0%B0%D0%BA_%D0%90%D0%B1%D0%B4%D1%80%D0%B0%D1%85%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2_-_%D0%A2%D0%BE%D0%BA%D1%82%D0%BE%D0%B3%D1%83%D0%BB%D0%B4%D1%83%D0%BD_%D0%9A%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%B8.webm.jpg', bio: 'Абдыракманов Нурак (19.10.1947, Ак-Талаа району, Куртка айылы - 26 май 2014) — комузчу, күүчү, ырчы-аткаруучу, Кыргыз Республикасынын эл артисти.'},
    {firstName:'Акжол', surname:'Махмудов', kesip:'Спортчу', img:'https://knews.kg/wp-content/uploads/2022/09/Akzhol-Mahmudov.jpg', bio: 'Махмудов Акжол Махамаджанович ( 1999-жылы 15-апрелде туулган [1] , Ош облусу , Араван району ) - кыргызстандык грек-рим күрөшү боюнча дүйнөнүн эки жолку чемпиону, Азия чемпиону, 23 жашка чейинки дүйнө чемпионатынын коло байге ээси, Азия оюндарынын байге ээси, 2020-жылкы Олимпиада оюндарынын күмүш байге ээси, Кыргызстандын эки жолку чемпиону [2] .'},
    {firstName:'Касым', surname:'Тыныстанов', kesip:'Окумуштуу, тилчи, саясатчы', img:'https://st-0.akipress.org/st_usernews/57/45557-700.jpg', bio: 'Касым Тыныстанов (10-сентябрь 1901-жылы, Орусия империясы, азыркы Ысык-Көл району, Чырпыкты кыштагы ― 6-ноябрь 1938-жылы, СССР, Кыргыз ССР, азыркы Ата-Бейит) ― кыргыз тил илиминин негиздөөчүсү, азыркы кыргыз адабиятына негиз салгандардын бири, акын, драматург, агартуучу, коомдук ишмер, журналист, биринчи кыргыз профессору.'},
    {firstName:'Чынгыз', surname:'Айтматов', kesip:'Жазуучу', img:'https://cdnuploads.aa.com.tr/uploads/Contents/2023/06/09/thumbs_b_c_aa96ae2ad6f442027eae53adbb417884.jpg?v=125322', bio: 'Айтматов Чыңгыз Төрөкулович (1928-2008) — кыргыз жана орус тилдеринде жазган советтик жана пост-советтик жазуучусу, Кыргыз ССРнин эл жазуучусу (1974), Социалисттик Эмгектин Баатыры (1978), Кыргыз Республикасынын Баатыры.'},
    {firstName:'Аскат', surname:'Сулайманов', kesip:'Актер', img:'https://www.kino-teatr.ru/acter/album/232991/pv_1153200.jpg', bio: '27- Май 1978 -жылы актёр Аскат Сулайманов туулган'},
    {firstName:'Нуржигит', surname:'Кадырбеков', kesip:'Саясатчы, коомдук ишмер', img:'https://yt3.googleusercontent.com/j5gGpjC-ptYXXYIqkKc_9RGcwmvIx5Cv54Y-EKSeHOy_y0eN4pJ6W5a3Xgqu6wao_xwzma7rhg=s900-c-k-c0x00ffffff-no-rj', bio: 'Нуржигит Кадырбеков 1977-жылы 31-мартта Ош облусунун Кара-Кулжа районунда туулган. Канзас университетинин (АКШ) журналистика жана массалык коммуникациялар факультетин бүтүргөн, ошондой эле Японияда эл аралык мамилелер жана мамлекеттик башкаруу боюнча магистр даражасын алган.'},
    {firstName:'Аскар', surname:'Салымбеков', kesip:'Бизнесмен', img:'https://upload.wikimedia.org/wikipedia/commons/1/1c/%D0%A1%D0%B0%D0%BB%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2_%D0%90%D1%81%D0%BA%D0%B0%D1%80.jpg', bio: 'Аскар Мааткабылович Салымбеков ( 5. 2. 1955-жылы туулган , Кара-Суу , Тянь-Шань облусу ) – кыргыз коомдук ишмер жана меценат, “Дордой” ассоциациясынын ардактуу президент'},
    {firstName:'Эрназар', surname:'Акматалиев', kesip:'Спортчу', img:'https://img.prosports.kg/news/content//202208/204165_adc73a5341e7943c9f244a3e8f5fd57c.jpg', bio: 'Эрназар Кубатбекович Акматалиев ( 2.07.1998 - ж . , Орто-Нура айылы , Нарын облусу , Кыргызстан ) – кыргызстандык эркин күрөш боюнча балбан, 2021 - жылдагы дүйнө чемпионатынын күмүш медалынын ээси, Токио Олимпиадасынын катышуучусу .'}
];

console.log(users);

// function showHtml(array) {
//     const visit = "";
//     for (const users of array) {
//         visit.innerHTML+=`
//         <h4>${users.firstName}</h6>
//         <h4>${users.surname}</h6>
//         <img width='200px' height='200px' src='${users.img}' />
//         <h4>${users.kesip}</p>
//         <p>${users.bio}</h6>
//         `
//     }

//     console.log(showHtml());
// }

function showHtml(array) {
    if (visit) {
        for (const user of array) {
            visit.innerHTML += `
                <h4>${user.firstName}</h4>
                <h4>${user.surname}</h4>
                <img width='200px' height='200px' src='${user.img}' />
                <h4>${user.kesip}</p>
                <p>${user.bio}</h6>
            `;
        } 
    }
}


input.onchange = (item) => {
    

         const userFilter = users.filter(user => user.firstName.toLowerCase() === input.value.toLowerCase());
    
        if (userFilter.length>0) {
            showHtml(userFilter);
            h1.innerHTML='Жалпы резюме'
            visit.style.display='block'
            
        } else {
            h1.innerHTML='Мындай резюме табылган жок'
            visit.style.display='none'
        }
    };
       