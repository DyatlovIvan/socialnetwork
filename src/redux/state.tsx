let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how a u?', likeCount: 12},
            {id: 2, message: "It\'s my first post", likeCount: 10}
        ]

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima', img : 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'},
            {id: 2, name: 'Valera', img : 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'},
            {id: 3, name: 'Sveta', img : 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'},
            {id: 4, name: 'Tanya', img : 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'},
            {id: 5, name: 'Anton', img : 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'},
            {id: 6, name: 'Alexandr', img : 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'}
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how a u?'},
            {id: 3, message: 'yo'},
        ]
    },
    sidebar:{
        friends:[
            {id:1, name: 'Dima', img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'},
            {id:2, name: 'Valera', img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'},
            {id:3, name: 'Sveta', img: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'},
        ]
    }
}

export default state;