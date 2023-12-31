import React from 'react'
import {
    FaFacebookSquare,
    FaWhatsappSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaYoutubeSquare
} from 'react-icons/fa';
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className='page-main after'>
                <div className='page__table after'>
                    <h1 className='page__title'>A PROUD PARTNER OF</h1>
                    <div className='footer-content'>
                        <div className='footer-content__item col-3'>
                            <img src='https://www.m88hl.com/~/static/images/footer/partnerships/partnership-laliga.svg' />
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>
                        <div className='footer-content__item col-3'>
                            <img src='https://www.m88hl.com/~/static/images/footer/partnerships/partnership-bwf.svg' />
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>

                        <div className='footer-content__item'>
                            <img src='	https://www.m88hl.com/~/static/images/footer/partnerships/partnership-acmilan.svg' />
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>
                        <div className='footer-content__item'>
                            <img src='https://www.m88hl.com/~/static/images/footer/partnerships/partnership-mp.svg' />
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>
                        <div className='footer-content__item'>
                            <img src='https://www.m88hl.com/~/static/images/footer/partnerships/partnership-mariaozawa.svg' />
                            <span>Official Regional Partner</span>
                            <p>2020 - 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-main footer-top'>
                <div className='page__table'>
                    <div className='flex-row'>
                        <div className='flex-row-item left'>
                            <div className='flex-item'>
                                <span>Payment Methods</span>
                            </div>
                            <div className='flex-item'>
                                <img className='grayscale-image' src='https://www.m88hl.com/~/static/images/footer/payment-methods/quick-transfer.svg' />
                                <img className='color-image' src='https://www.m88hl.com/~/static/images/footer/payment-methods/quick-transfer-color.svg' />
                            </div>
                            <div className='flex-item tether'>
                                <img className='grayscale-image' src='https://www.m88hl.com/~/static/images/footer/payment-methods/tether.svg' />
                                <img className='color-image' src='https://www.m88hl.com/~/static/images/footer/payment-methods/tether-color.svg' />
                            </div>
                            <div className='flex-item tether'>
                                <img className='grayscale-image' src='https://www.m88hl.com/~/static/images/footer/payment-methods/touchngo.svg' />
                                <img className='color-image' src='https://www.m88hl.com/~/static/images/footer/payment-methods/touchngo-color.svg' />
                            </div>
                            <div className='flex-item tether'>
                                <img className='grayscale-image' src='https://www.m88hl.com/~/static/images/footer/payment-methods/duitnow.svg' />
                                <img className='color-image' src='https://www.m88hl.com/~/static/images/footer/payment-methods/duitnow-color.svg' />
                            </div>
                        </div>
                        <div className='flex-row-item'>
                            <FaWhatsappSquare className='icons' />
                            <FaFacebookSquare className='icons' />
                            <FaInstagramSquare className='icons' />
                            <FaTwitterSquare className='icons' />
                            <FaYoutubeSquare className='icons' />
                        </div>
                    </div>
                    <div className='flex-row links'>
                        <a className='footer-link'>About M88</a>
                        <a className='footer-link'>Refer Friend</a>
                        <a className='footer-link'>VIP</a>
                        <a className='footer-link'>Affiliates</a>
                        <a className='footer-link'>Banking Options</a>
                        <a className='footer-link'>Responsible Gaming</a>
                        <a className='footer-link'>Contact Us</a>
                        <a className='footer-link'>Help Center</a>
                        <a className='footer-link'>Sponsorship</a>
                    </div>
                    <div className='flex-row links'>
                        <a className='footer-link'>M88 Japan</a>
                        <a className='footer-link'>M88 China</a>
                        <a className='footer-link'>M88 Korea</a>
                        <a className='footer-link'>M88 India</a>
                        <a className='footer-link'>M88 Thailand</a>
                        <a className='footer-link'>M88 Vietnam</a>
                        <a className='footer-link'>M88</a>
                        <a className='footer-link'>Bhs Indonesia</a>
                    </div>
                </div>
            </div>
            <div className='page-main footer-top' style={{ backgroundColor: '#222939' }}>
                <div className='page__table'>
                    <div className='gr-footer-center'>
                        <h3>OUR PREVIOUS SPONSORSHIPS</h3>
                        <div className='spn-flex'>
                            <div className='sponsor'>
                                <img class="sponsor-image" src="https://www.m88hl.com/~/static/images/footer/previous-sponsorships/bournemouth.svg?build=2.67.1.2362.bec992e9f5ef148586853ee7c039f43f11c2fd39-145870" />
                                <div className='sponsor-info'>
                                    <span>AFC Bournemouth</span>
                                    <span>2015 - 2020</span>
                                </div>
                            </div>
                            <div className='sponsor'>
                                <img class="sponsor-image" src="https://www.m88hl.com/~/static/images/footer/previous-sponsorships/crystal-palace.svg?build=2.67.1.2362.bec992e9f5ef148586853ee7c039f43f11c2fd39-145870" />
                                <div className='sponsor-info'>
                                    <span>Crystal Palace</span>
                                    <span>2015 - 2017</span>
                                </div>
                            </div>
                            <div className='sponsor'>
                                <img class="sponsor-image" src="https://www.m88hl.com/~/static/images/footer/previous-sponsorships/manchester-city.svg?build=2.67.1.2362.bec992e9f5ef148586853ee7c039f43f11c2fd39-145870" />
                                <div className='sponsor-info'>
                                    <span>Manchester City</span>
                                    <span>2011 - 2012</span>
                                </div>
                            </div>
                            <div className='sponsor'>
                                <img class="sponsor-image" src="https://www.m88hl.com/~/static/images/footer/previous-sponsorships/tottenham-hotspur.svg?build=2.67.1.2362.bec992e9f5ef148586853ee7c039f43f11c2fd39-145870" />
                                <div className='sponsor-info'>
                                    <span>Tottenham Hotspur</span>
                                    <span>2006 - 2010</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
