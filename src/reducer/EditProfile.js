

const INITIAL_STATE = {
  nama: 'Nama Anda',
  deskripsi: 'I Love Caffeinee',
  emailUser: 'test@test.com',
  nomor: '08220287022',
  tanggal: '24 Agustus 1998',
  alamat: 'Jl. Kesumba no 7',
  photoURL: 'https://cdn3.iconfinder.com/data/icons/black-easy/512/538474-user_512x512.png'
}

export const updateProfile = (state = INITIAL_STATE, action) => {


  switch (action.type) {
    case 'nama':

      return { ...state, nama: action.payload }
    case 'deskripsi':

      return { ...state, deskripsi: action.payload }
    case 'emailUser':

      return { ...state, emailUser: action.payload }
    case 'nomor':

      return { ...state, nomor: action.payload }
    case 'tanggal':

      return { ...state, tanggal: action.payload }
    case 'alamat':

      return { ...state, alamat: action.payload }
    default:
      return state
  }
}

