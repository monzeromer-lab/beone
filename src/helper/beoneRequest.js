const axios = require('axios');

data = {
  account_no: 1007846,
  secret_key: "c849974cf4f8363210b106816",
  payment_mode: "CC",
  cod_amount: 0,
  reference_no: 3042622,
  second_reference_no: 685464646,
  origin_city: "Riyadh",
  destination_city: "Riyadh",
  weight: 1,
  service: 3,
  productType: "parcel",
  sender_name: "john Doe",
  sender_address: "6634, Al Munsiyah, Riyadh 13249 3358, Saudi Arabia",
  sender_phone: "554413535",
  sender_email: "johndwo@gmail.com",
  receiver_name: "John",
  receiver_address: "",
  receiver_phone: 966591551001,
  receiver_email: "johndoe@gmail.com",
  description: "test address"
}

res = {
  event: 'order.created',
  merchant: 526032028,
  created_at: 'Thu Jul 29 2021 10:11:29 GMT+0300',
  data: {
    id: 1942133833,
    reference_id: 19906030,
    urls: {
      customer: 'https://web-test-apple-pay.salla.cloud/order/6zldvywj3qbNWXKylPLaE0RVrQZJPG7L',
      admin: 'https://s.salla.sa/orders/order/6zldvywj3qbNWXKylPLaE0RVrQZJPG7L'     
    },
    date: {
      date: '2021-07-29 10:11:28.000000',
      timezone_type: 3,
      timezone: 'Asia/Riyadh'
    },
    status: { id: 566146469, name: 'بإنتظار المراجعة', customized: [Object] },      
    payment_method: 'cod',
    currency: 'SAR',
    amounts: {
      sub_total: [Object],
      shipping_cost: [Object],
      cash_on_delivery: [Object],
      tax: [Object],
      discounts: [],
      total: [Object]
    },
    shipping: {},
    can_cancel: false,
    pickup_branch: {
      id: 1844530919,
      name: 'فرع الرياض',
      status: 'active',
      location: [Object],
      contacts: [Object],
      preparation_time: '3 ساعات',
      is_open: false,
      closest_time: [Object],
      working_hours: [Array],
      is_cod_available: true,
      is_default: false,
      type: {},
      cod_cost: '9.00',
      country: [Object],
      city: [Object]
    },
    shipment_branch: [],
    customer: {
      id: 439756554,
      first_name: 'نمؤن',
      last_name: 'نية',
      mobile: 555555555,
      mobile_code: '+966',
      email: 'Issuau666111@gmail.com',
      urls: [Object],
      avatar: 'https://cdn.salla.sa/customer_profiles/9aiA49MwJCwr72ktS4IomqFPFkgixtzBxfm5cq08.jpg',
      gender: 'male',
      birthday: [Object],
      city: 'مكة',
      country: 'السعودية',
      currency: 'SAR',
      location: '',
      updated_at: [Object]
    },
    bank: null,
    items: [ [Object] ],
    tags: []
  }
}