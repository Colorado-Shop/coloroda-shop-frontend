import { Component, OnInit } from '@angular/core'
import { CartItem } from '../../models/cart-item'
import { CartService } from '../../services/cart.service'
import { Quantity } from '../../models/quantity'
import { Checkout } from '../../models/api/checkout'
import { ShippingDetails } from '../../models/api/shippingDetails'
import { Cart } from '../../models/api/cart'
import { CartItem as ApiCartItem } from '../../models/api/cartItem'
import { ApiService } from '../../services/api.service'
import { HttpErrorResponse } from '@angular/common/http'
import Swal from 'sweetalert2'
import swal from 'sweetalert2'

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  isLoading = false
  buttonMsg = 'Place Order'
  countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua &amp; Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia &amp; Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cruise Ship',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kuwait',
    'Kyrgyz Republic',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Pierre &amp; Miquelon',
    'Samoa',
    'San Marino',
    'Satellite',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'St Kitts &amp; Nevis',
    'St Lucia',
    'St Vincent',
    'St. Lucia',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    "Timor L'Este",
    'Togo',
    'Tonga',
    'Trinidad &amp; Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks &amp; Caicos',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ]

  items: CartItem[] = new Array()
  shipping: ShippingDetails = new ShippingDetails()
  constructor(
    private cartService: CartService,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.cartService.getItems().subscribe((data: CartItem[]) => {
      this.items = data
    })
  }

  total() {
    return this.cartService.total()
  }

  submit() {
    this.isLoading = true
    this.buttonMsg = 'Loading... Please wait!'
    if (this.items.length < 1) {
      Swal({
        title: 'Oops!',
        text:
          'Your cart is empty try adding some items to your cart before trying to checkout',
        type: 'warning',
        confirmButtonText: 'Ok got it!',
      })
      this.isLoading = false
      this.buttonMsg = 'Place Order'
    } else {
      let checkout = new Checkout()
      let cart = new Cart()
      this.items.forEach((value: CartItem) => {
        let apiCartItem: ApiCartItem = new ApiCartItem()
        apiCartItem.productName = value.product.name
        apiCartItem.productQuantities = this.formatQuantity(value)
        apiCartItem.productTotal = this.itemTotal(value)
        cart.cartItems.push(apiCartItem)
      })
      cart.grandTotal = this.cartService.total()
      checkout.cart = cart
      checkout.shippingDetails = this.shipping
      this.apiService.checkout(checkout).subscribe(
        (data: any) => {
          this.isLoading = true
          this.shipping = new ShippingDetails()
          this.cartService.purge()
          Swal({
            title: 'Thanks!',
            text:
              'Thank you! You order has been received. We will contact you as soon as possible',
            type: 'success',
            confirmButtonText: 'Ok',
          })
          this.isLoading = false
          this.buttonMsg = 'Place Order'
        },
        (err: HttpErrorResponse) => {
          this.isLoading = false
          Swal({
            title: 'Error!',
            text:
              'Unable to place order. Make sure you are connected to the internet',
            type: 'warning',
            confirmButtonText: 'Ok got it!',
          })
          this.buttonMsg = 'Place Order'
        },
      )
    }
  }

  private formatQuantity(item: CartItem): string {
    let quantities = item.quantities

    let all: string = ''
    for (var i = 0; i < quantities.length; i++) {
      if (i == 0) all = quantities[i].quantity + ' - ' + quantities[i].unit
      else
        all = all + ' & ' + quantities[i].quantity + ' - ' + quantities[i].unit
    }
    return all
  }

  itemTotal(item: CartItem): number {
    let prices = item.product.prices
    let map: Map<string, number> = new Map<string, number>()
    for (var i = 0; i < prices.length; i++) {
      map.set(prices[i].unit, prices[i].amount - 20)
    }

    let total = 0
    item.quantities.forEach((quantity: Quantity) => {
      total += map.get(quantity.unit) * quantity.quantity
    })

    return total
  }

  clearCart() {
    if (this.items.length > 0) {
      Swal({
        title: 'Delete Cart!',
        type: 'warning',
        text: 'Are you sure you want to empty your cart ?',
        animation: false,
        confirmButtonColor: '#f51167',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.value) {
          this.cartService.purge()
          swal({
            title: 'Deleted!',
            type: 'success',
            text: 'Your cart is now empty!',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#f51167',
          })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      })
    } else {
      swal({
        type: 'warning',
        text: 'Your cart is already empty!',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#f51167',
      })
    }
  }
}
