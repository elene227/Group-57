// 1)შექმენით ერთი დივი,მიეცით ზომები 150px სიგანე 300px სიმაღლე/მიეცით წითელი ბორდერი

// ამ დივში ჩააშენეთ 1 ფოტო(ინტერნეტშ მოძებნეთ ნებისმიერი ფოტო)

// ამ დივშ ფოტოს ქვემოთ ჩააშენეთ 1 სათაური , ამ სათაურს ქონდეს class --> "heading" და css ში გასტილეთ

// სათაურის ქვემოთ ჩააშენეთ 1 პარაგრაფი რომელსაც კლასი ექნება paragraph და css იდან გასტილეთ

// და ამ სათაურის ქვევით იყოს button რომელსაც გასტილავთ css იდან





let div = document.getElementsByTagName('div')


div[0].innerHTML = "<div style='background-color: blue; width: 150px; height: 300px; '><img src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'><br> <h1 style='color:red; class='heading'>hi</h1> <button style='background-color:blue;'>hello<button></div>"

