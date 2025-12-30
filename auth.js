// auth.js

  const AUTH_KEY_SESSION  = 'ib_ros_current_user';   
  const AUTH_KEY_REMEMBER = 'ib_ros_remember_user';

const USERS = [
  { username: 'admin',   password: 'admin12345', name: 'Admin',   role: 'admin' },
  { username: 'kepalaruangan', password: 'kepalaruangan',   name: 'Kepala Ruangan', role: 'Operator' },
  { username: 'perawat1', password: '197607301997031002',   name: 'Dadan Darwanto', role: 'staff' },
  { username: 'perawat2', password: '814068107',   name: 'Aang Darajat', role: 'staff' },
  { username: 'perawat3', password: '198004032007012009',   name: 'Ade Rosita', role: 'staff' },
  { username: 'perawat4', password: '814069085',   name: 'Adhim Fatah', role: 'staff' },
  { username: 'perawat5', password: '814069018',   name: 'Adi Frengki', role: 'staff' },
  { username: 'perawat6', password: '196803261990031006',   name: 'Adnan Gunawan', role: 'staff' },
  { username: 'perawat7', password: '814068963',   name: 'Ajat Destiana', role: 'staff' },
  { username: 'perawat8', password: '198508072010011000',   name: 'Andi Sobandi', role: 'staff' },
  { username: 'perawat9', password: '197512112006042000',   name: 'Apong', role: 'staff' },
  { username: 'perawat10', password: '814067985',   name: 'Cecep Maman', role: 'staff' },
  { username: 'perawat11', password: '814069013',   name: 'Dea Fitriana', role: 'staff' },
  { username: 'perawat12', password: '197707262000121001',   name: 'Deden Witaryono', role: 'staff' },
  { username: 'perawat13', password: '814069054',   name: 'Denny R', role: 'staff' },
  { username: 'perawat14', password: '814069057',   name: 'Dini Diah', role: 'staff' },
  { username: 'perawat15', password: '198103232008012005',   name: 'Dini Mardiniani', role: 'staff' },
  { username: 'perawat16', password: '197306021993032005',   name: 'Empong Setiawati', role: 'staff' },
  { username: 'perawat17', password: '814068467',   name: 'Gumilar Fajar', role: 'staff' },
  { username: 'perawat18', password: '814069008',   name: 'Gunawan Haris', role: 'staff' },
  { username: 'perawat19', password: '814068414',   name: 'Hedi Hidayat', role: 'staff' },
  { username: 'perawat20', password: '198110012008012006',   name: 'Ibid Badriah', role: 'staff' },
  { username: 'perawat21', password: '814069015',   name: 'Ilham Mulyadin', role: 'staff' },
  { username: 'perawat22', password: '814068815',   name: 'Irnawati Sutarno', role: 'staff' },
  { username: 'perawat23', password: '199603312024212002',   name: 'Kania Endah', role: 'staff' },
  { username: 'perawat24', password: '198207312008011003',   name: 'Koko Abulkodir', role: 'staff' },
  { username: 'perawat25', password: '814069017',   name: 'Lutfhy Fatricia', role: 'staff' },
  { username: 'perawat26', password: '199410152025212055',   name: 'Mayang Fani', role: 'staff' },
  { username: 'perawat27', password: '814068543',   name: 'Melliana Endah', role: 'staff' },
  { username: 'perawat28', password: '814069063',   name: 'Mia Mutmainah', role: 'staff' },
  { username: 'perawat29', password: '197306111994031005',   name: 'Momon Suherman', role: 'staff' },
  { username: 'perawat30', password: '814068990',   name: 'Muhamad Mabruri', role: 'staff' },
  { username: 'perawat31', password: '814068049',   name: 'Nuni Nurmayanti', role: 'staff' },
  { username: 'perawat32', password: '814068103',   name: 'Nurwulan Pusfitasari', role: 'staff' },
  { username: 'perawat33', password: '814068187',   name: 'Penti Yuliana', role: 'staff' },
  { username: 'perawat34', password: '814068968',   name: 'Pupung Giri', role: 'staff' },
  { username: 'perawat35', password: '814069014',   name: 'Resty Ariska', role: 'staff' },
  { username: 'perawat36', password: '814067995',   name: 'Reval Faisaly', role: 'staff' },
  { username: 'perawat37', password: '814068409',   name: 'Rohmatun Nisa', role: 'staff' },
  { username: 'perawat38', password: '814068987',   name: 'San Maulana', role: 'staff' },
  { username: 'perawat39', password: '197309021994031004',   name: 'Satang Karmajaya', role: 'staff' },
  { username: 'perawat40', password: '814068415',   name: 'Shidiq Alfarishi', role: 'staff' },
  { username: 'perawat41', password: '198211022023212002',   name: 'Siti Suryani', role: 'staff' },
  { username: 'perawat42', password: '198206292006092000',   name: 'Tati Rodiah', role: 'staff' },
  { username: 'perawat43', password: '197303281994032004',   name: 'Teti Rusmawati', role: 'staff' },
  { username: 'perawat44', password: '814069016',   name: 'Tresa Pratiwi', role: 'staff' },
  { username: 'perawat45', password: '196803111989012001',   name: 'Tuti Humaeroh', role: 'staff' },
  { username: 'perawat46', password: '198512082022212001',   name: 'Tuti Kusmayanti', role: 'staff' },
  { username: 'perawat47', password: '197802282007011005',   name: 'Ujang Cucu', role: 'staff' },
  { username: 'perawat48', password: '197510142005011005',   name: 'Wendra Herdian', role: 'staff' },
  { username: 'perawat49', password: '198207132008012003',   name: 'Yanti Yulianti', role: 'staff' },
  { username: 'perawat50', password: '197708202006042015',   name: 'Yati Sumyati', role: 'staff' },
  { username: 'perawat51', password: '197309202006041019',   name: 'Yuhaendi', role: 'staff' },
  { username: 'perawat52', password: '814068019',   name: 'Yuli Susyanti', role: 'staff' },
  { username: 'perawat53', password: '814069084',   name: 'Yulia Nur', role: 'staff' },
  { username: 'perawat54', password: '197806282008012000',   name: 'Yunita Sondaria', role: 'staff' },
];

function login(username, password, remember=false) {
  const u = USERS.find(x => x.username === username && x.password === password);
  if (!u) throw new Error('Username atau password salah.');

const session = { id: u.id, username: u.username, name: u.name, role: String(u.role || '').toLowerCase(), loginAt: Date.now() };
sessionStorage.setItem(AUTH_KEY_SESSION, JSON.stringify(session));

  if (remember) localStorage.setItem(AUTH_KEY_REMEMBER, JSON.stringify(session));
  else localStorage.removeItem(AUTH_KEY_REMEMBER);

  return session;
}

function currentUser(){
  try {
    const s = sessionStorage.getItem(AUTH_KEY_SESSION);
    if (s) return JSON.parse(s);
    const r = localStorage.getItem(AUTH_KEY_REMEMBER);
    return r ? JSON.parse(r) : null;
  } catch { return null; }
}

function logout(){
  sessionStorage.removeItem(AUTH_KEY_SESSION);
  localStorage.removeItem(AUTH_KEY_REMEMBER);
  location.href = 'login.html';
}

function requireAuth(){
  const user = currentUser();
  if (!user) { location.href = 'login.html'; return null; }
  return user;
}

window.ORAuth = { login, currentUser, logout, requireAuth };
