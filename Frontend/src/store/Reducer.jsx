const  initState = {
    data:[
        {
            id:1,
            name: 'IP x',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apdawple',
            price: 100000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        },
        {id:2,
            name: 'IP 12',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Appddle',
            price: 300000,
            sale: '',
            category: 'Điện thoại',
            stock: 0,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        },
        {id:3,
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Appfle',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        },
        {id:4,
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        },
        {id:5,
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Appfwle',
            price: 3200000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        },
        {id:6,
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Appfwle',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.LyVr2gLJRZLG5gYXAYRfCgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {id:7,
            name: 'Sạc dự phòng OPO',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:8,
            name: 'Sạc dự phòng OPO',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:9,
            name: 'Sạc dự phòng test dit',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:10,
            name: 'Sạc dự phòng test dit',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Adawpple',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:11,
            name: 'Sạc dự phòng test dit',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Appadwle',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:12,
            name: 'Sạc dự phòng test dit',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Appffle',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:13,
            name: 'Sạc dự phòng test dit',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apdaple',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:14,
            name: 'Sạc dự phòng OPO',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:15,
            name: 'Sạc dự phòng OPO',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'opo',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:16,
            name: 'Sạc dự phòng OPO',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'oppczo',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:17,
            name: 'Sạc dự phòng OPO',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'oppocz',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
        {id:18,
            name: 'Sạc dự phòng OPO',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'w',
            price: 32000000,
            sale: '',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },


    ],
}
function Reducer(state,action) {
    switch (action.type) {
   }
}

export {initState}
export default Reducer;