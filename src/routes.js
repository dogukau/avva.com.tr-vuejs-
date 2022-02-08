import Index from "@/pages/Index";
import Uyeol from "@/pages/Uyeol";
import Sepet from "@/pages/Sepet";
import Urunsayfasi from "@/pages/Urunsayfası";
import tumurunler from "@/pages/tum-urunler";

export default [
    {
        path:'/',
        component:Index
    },
    {
        path:'/uyeol',
        component:Uyeol
    },
    {
        path:'/sepet',
        component:Sepet
    },
    {
        path:'/urun-:id',
        component:Urunsayfasi,
        name:'product',
        props: true
    },
    {
        path:'/tum-urunler',
        component:tumurunler
    },
];
