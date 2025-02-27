'use client';
import React, { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';

const ScriptIntegration = () => {
  useEffect(() => {
    // Clear localStorage on page reload
    if (typeof window !== 'undefined') {
      if (performance.navigation.type === 1) {
        if (localStorage.getItem('b24-form-field-stored-values')) {
          localStorage.removeItem('b24-form-field-stored-values');
          console.log("'b24-form-field-stored-values' cleared from local storage on page load.");
        }
      }

      // Initialize dataLayer if not already initialized
      window.dataLayer = window.dataLayer || [];

      // Define gtag function if it doesn't already exist
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
    }
  }, []);

  // Function to handle cookie consent
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Cookie management functions
      const setCookie = (name, value, days, domain) => {
        let expires = "";
        if (days) {
          const date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        let domainAttribute = domain ? "; domain=" + domain : "";
        document.cookie = name + "=" + (value || "") + expires + domainAttribute + "; path=/";
      };

      const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      };

      const showCookieAlert = () => {
        const cookieAlert = document.getElementById('cookiecontainer');
        if (cookieAlert) {
          cookieAlert.style.display = 'flex';
        }
      };

      // Form tracking variables
      let formPushTracker = {};

      // Function to handle form submission for elements with class "b24-form-btn"
      const initializeFormListeners = () => {
        console.log("Checking for form buttons...");
        var formButtons = document.querySelectorAll(".b24-form-btn");

        if (formButtons.length > 0) {
          console.log("Form buttons found:", formButtons.length);

          formButtons.forEach(function (button) {
            button.addEventListener("click", function (event) {
              console.log("Form button clicked.");

              setTimeout(function () {
                var parentDiv = button.closest("div[id^='b24-']");
                var order_id = parentDiv ? parentDiv.id.replace('b24-', '') : "default_b24_id";
                order_id = order_id.replace(/\D/g, '').slice(0, 10);

                if (formPushTracker[order_id]) {
                  console.log("Data for this form has already been pushed. Skipping...");
                  return;
                }

                var formElement = button.closest("form");

                if (formElement) {
                  console.log("Associated form element found.");
                  var formId = formElement.id || "default_form_id";
                  var formName = formElement.getAttribute("name") || "default_form_name";

                  if (localStorage.getItem('b24-form-field-stored-values')) {
                    console.log("'b24-form-field-stored-values' found in local storage.");
                    var storedValues = JSON.parse(localStorage.getItem('b24-form-field-stored-values'));
                    console.log("Retrieved data:", storedValues);

                    localStorage.setItem('gtm_form_data', JSON.stringify({
                      'form_id': formId,
                      'form_name': formName,
                      'order_id': order_id,
                      ...storedValues
                    }));

                    window.gtag('event', 'form_submit', {
                      'form_id': formId,
                      'form_name': formName,
                      'order_id': order_id,
                      ...storedValues
                    });
                    console.log("Data pushed to dataLayer using gtag with event 'form_submit':", storedValues, "with order_id:", order_id);

                    var existingGtmClickEvent = window.dataLayer.find(function (event) {
                      return event.event === 'gtm.click' && event.order_id === order_id;
                    });

                    if (existingGtmClickEvent) {
                      Object.assign(existingGtmClickEvent, {
                        'form_id': formId,
                        'form_name': formName,
                        ...storedValues
                      });
                      console.log("Appended data to existing 'gtm.click' event:", existingGtmClickEvent);
                    } else {
                      window.gtag('event', 'gtm.click', {
                        'form_id': formId,
                        'form_name': formName,
                        'order_id': order_id,
                        ...storedValues
                      });
                      console.log("Data pushed to dataLayer using gtag with event 'gtm.click':", storedValues, "with order_id:", order_id);
                    }

                    formPushTracker[order_id] = true;
                  } else {
                    console.log("'b24-form-field-stored-values' not found in local storage.");
                  }
                } else {
                  console.error("Associated form element not found for this button.");
                }
              }, 500);
            });
          });
        } else {
          console.error("No form buttons found with class 'b24-form-btn'.");
        }
      };

      // Function to set up live chat observation
      const setupLiveChat = () => {
        const checkLiveChatTitle = () => {
          const divElement = document.querySelector('.bx-livechat-title');
          console.log({ divElement });

          if (divElement && divElement.innerHTML.trim() === 'Free Consultation - Digital Forensic | UK | OC | LP') {
            console.log('The div element with the desired inner HTML content is found');

            const submitButton = divElement.parentNode?.parentNode?.parentNode?.querySelector('.b24-form-btn');
            console.log(submitButton);

            if (submitButton) {
              submitButton.classList.add('b24-form-btn--blackmailusV4');
              
              submitButton.addEventListener('click', function onClick() {
                submitButton.classList.remove('b24-form-btn--blackmailusV4');
                submitButton.removeEventListener('click', onClick);
              });
            }
          }
        };

        const observeLiveChatTitle = () => {
          const observer = new MutationObserver(() => {
            checkLiveChatTitle();
          });

          observer.observe(document.body, { childList: true, subtree: true });
        };

        // Observe for live chat changes
        observeLiveChatTitle();

        // Setup click event on widget button
        const divElement2 = document.querySelector('.b24-widget-button-inner-container');
        console.log({ divElement2 });

        if (divElement2) {
          divElement2.addEventListener('click', function () {
            setTimeout(checkLiveChatTitle, 1000);
          });
        }
      };

      // Function to setup phone number country flags
      const setupPhoneFlags = () => {
        if (typeof intlTelInput === 'undefined') return;

        let timer = 0;
        let country = 'us';
        let countryData;

        fetch('https://reallyfreegeoip.org/json/')
          .then(res => res.json())
          .then(data => {
            country = data.country_code.toLowerCase();
            ipLocation();
          });

        function ipLocation() {
          function addCode() {
            let input = document.querySelectorAll("input[type='tel']");

            input.forEach(elem => {
              let currInput = intlTelInput(elem, {
                initialCountry: country
              });

              countryData = currInput.getSelectedCountryData();
              elem.value = '+' + countryData.dialCode;

              let dialCode = '+' + countryData.dialCode;
              document.addEventListener('click', e => {
                let elemClass = e.target.classList;
                if (elemClass.contains('iti__country')) {
                  dialCode = e.target.children[2].innerHTML;
                  elem.value = dialCode;
                } else if (elemClass.contains('iti__flag-box') ||
                  elemClass.contains('iti__country-name') ||
                  elemClass.contains('iti__dial-code')) {
                  dialCode = e.target.parentNode.children[2].innerHTML;
                  elem.value = dialCode;
                }
              });
            });
            timer++;
            if (timer > 30)
              clearInterval(interval);
          }

          let interval = setInterval(addCode, 500);

          document.querySelectorAll('.bitrix-form-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              timer = 0;
              interval = setInterval(addCode, 500);
            });
          });

          let classes = ['b24-form', 'b24-form-control', 'iti__flag', 'iti__arrow', 'iti__selected-flag'];
          document.body.addEventListener('click', e => {
            if (classes.includes(e.target.classList[0]))
              clearInterval(interval);
          });
        }
      };

      // Function to dynamically set form properties
      const setFormValues = (form) => {
        let parentDiv = document.querySelector(".b24-form-btn")?.closest("div[id^='b24-']");
        let orderId = parentDiv ? parentDiv.id.replace('b24-', '') : "default_b24_id";
        orderId = orderId.replace(/\D/g, '').slice(0, 10);

        let pageIdentifier = window.location.pathname.split('/').pop();
        let cookiesStatus = getCookie('cookiesStatus_' + pageIdentifier);
        let adUserData = cookiesStatus === 'Accepted' ? 'Granted' : cookiesStatus === 'Rejected' ? 'Denied' : '';
        let adPersonalization = cookiesStatus === 'Accepted' ? 'Granted' : cookiesStatus === 'Rejected' ? 'Denied' : '';
        let cookies = cookiesStatus === 'Accepted' ? 'Granted' : cookiesStatus === 'Rejected' ? 'Denied' : '';
        
        form.setProperty("order_id", orderId);
        form.setProperty("ad_user_data", adUserData);
        form.setProperty("ad_personalization", adPersonalization);
        form.setProperty("cookies_status", cookies);

        console.log('Form values set dynamically:');
        console.log('order_id =', orderId);
        console.log('ad_user_data =', adUserData);
        console.log('ad_personalization =', adPersonalization);
        console.log('cookies_status =', cookies);
      };

      // Function to handle form submission delay and confirm values again
      const handleFormSubmit = (form) => {
        setTimeout(() => {
          console.log('Reconfirming values before submission:');
          console.log('order_id =', form.getProperty("order_id"));
          console.log('ad_user_data =', form.getProperty("ad_user_data"));
          console.log('ad_personalization =', form.getProperty("ad_personalization"));
          console.log('cookies_status =', form.getProperty("cookies_status"));

          console.log('Form submitted with final confirmed values.');
        }, 1000); // 1 second delay
      };

      // Function to check for the availability of the submit button
      const checkButtonAvailability = (form) => {
        let interval = setInterval(() => {
          let submitButton = document.querySelector('.b24-form-btn');

          if (submitButton) {
            console.log('Submit button found:', submitButton);

            submitButton.addEventListener('click', (e) => {
              console.log('Submit button clicked. Delaying form submission for value confirmation...');

              setFormValues(form);
              handleFormSubmit(form);

              clearInterval(interval);
            });
          } else {
            console.log('Submit button not found yet, checking again...');
          }
        }, 3000); // Check every 3 seconds
      };

      // Initialize components on load
      const initializeComponents = () => {
        // Cookie handling
        const pageIdentifier = window.location.pathname.split('/').pop();
        const cookiesStatus = getCookie('cookiesStatus_' + pageIdentifier);
        const cookiesPage = getCookie('cookiesPage_' + pageIdentifier);

        if (cookiesStatus === 'Rejected') {
          showCookieAlert();
        } else if ((cookiesPage !== 'Accepted' && cookiesPage !== 'Rejected') || 
                   (cookiesStatus !== 'Accepted' && cookiesStatus !== 'Rejected')) {
          setTimeout(showCookieAlert, 500);
        }

        // Set up event listeners for cookie buttons
        const acceptButton = document.getElementById('btn-accept-all');
        const rejectButton = document.getElementById('btn-reject-all');
        
        if (acceptButton) {
          acceptButton.addEventListener('click', function () {
            const pageId = window.location.pathname.split('/').pop();
            setCookie('cookiesStatus_' + pageId, 'Accepted', 180, window.location.hostname);
            setCookie('cookiesPage_' + pageId, 'Accepted', 180, window.location.hostname);
            const cookieContainer = document.getElementById('cookiecontainer');
            if (cookieContainer) {
              cookieContainer.style.display = 'none';
            }
          });
        }
        
        if (rejectButton) {
          rejectButton.addEventListener('click', function () {
            const pageId = window.location.pathname.split('/').pop();
            setCookie('cookiesStatus_' + pageId, 'Rejected', 180, window.location.hostname);
            setCookie('cookiesPage_' + pageId, 'Rejected', 180, window.location.hostname);
            const cookieContainer = document.getElementById('cookiecontainer');
            if (cookieContainer) {
              cookieContainer.style.display = 'none';
            }
          });
        }

        // Set up form handling
        window.addEventListener('b24:form:init', (event) => {
          console.log('Form initialization event triggered:', event);

          let form = event.detail.object;
          console.log('Form object:', form);

          setFormValues(form);
          checkButtonAvailability(form);
        });

        // Setup live chat
        setupLiveChat();
        
        // Setup phone flags
        setupPhoneFlags();
        
        // Initialize form listeners
        initializeFormListeners();
        
        // Continuously check for new forms
        setInterval(initializeFormListeners, 3000);
      };

      // Run initialization when DOM is fully loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeComponents);
      } else {
        initializeComponents();
      }
    }
  }, []);

  return (
    <>
      <Head>
        {/* Add required CSS for telephone input */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.min.css" />
        
        {/* Add cookie consent styles */}
        <style jsx global>{`
          .cookiealert {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgb(0 0 0 / 80%);
            color: white;
            padding: 15px;
            display: flex;
            flex-direction: column;
            z-index: 99999;
          }
          .cookiealert a {
            color: #66b2ff;
            text-decoration: underline;
          }
          .cookiealert button {
            border: none;
            color: white;
            padding: 8px 16px;
            cursor: pointer;
            border-radius: 3px;
            margin: 0 5px;
          }
          .cookiealert button.btn-success {
            background-color: #28a745;
          }
          .cookiealert button.btn-danger {
            background-color: #dc3545;
          }
        `}</style>
      </Head>

      {/* Google Tag Manager Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-5ZK559W');
        `}
      </Script>

      {/* Bitrix24 Script */}
      <Script id="bitrix24-script" strategy="afterInteractive">
        {`
          (function(w,d,u){
            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
          })(window,document,'https://cdn.bitrix24.com/b15773863/crm/site_button/loader_310_wozrt0.js');
        `}
      </Script>

      {/* Intl Tel Input Script */}
      <Script 
        id="intl-tel-input" 
        src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js" 
        strategy="afterInteractive"
      />

      {/* Cookie Consent Banner */}
      <div className="alert text-center cookiealert cookie-consent-banner" role="alert" id="cookiecontainer" style={{ display: 'none' }}>
        <div className="cookie-data" style={{ textAlign: 'center' }}>
          <p>🍪 This website uses cookies to help you have a superior and more relevant browsing experience on the website. <a href="https://techforing.com/trust/" target="_blank" rel="noreferrer"> Read more...</a></p>
        </div>

        <div className="cookie-buttons" style={{ textAlign: 'center' }}>
          <button type="button" className="btn btn-success btn-sm cookie-consent-button btn-success button acceptcookies" id="btn-accept-all">Accept</button>
          <button type="button" className="btn btn-danger btn-sm cookie-consent-button button declinecookies" id="btn-reject-all">Decline</button>
        </div>
      </div>
    </>
  );
};

export default ScriptIntegration;