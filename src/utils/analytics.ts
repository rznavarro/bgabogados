// Google Tag Manager / dataLayer tracking utility
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params,
    });
    // In dev environment, log for verification
    if (import.meta.env.DEV) {
      console.log(`[Analytics dataLayer]`, eventName, params);
    }
  }
}

export function trackWhatsAppClick(location: string, serviceTitle?: string) {
  trackEvent('click_whatsapp', {
    location,
    service: serviceTitle || 'general',
  });
}

export function trackPhoneClick(location: string) {
  trackEvent('click_telefono', {
    location,
    phone_number: '+56933040845',
  });
}

export function trackFormSubmit(caseType: string, success: boolean) {
  trackEvent('form_submit', {
    case_type: caseType,
    status: success ? 'success' : 'failed',
  });
}

export function trackFaqOpen(question: string) {
  trackEvent('faq_open', {
    question,
  });
}
