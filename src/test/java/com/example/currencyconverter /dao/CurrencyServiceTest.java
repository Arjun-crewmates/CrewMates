package com.example.currencyconverter.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CurrencyServiceTest {

    @Test
    void testConvert() {
        CurrencyService service = new CurrencyService();
        double result = service.convert("USD", "EUR", 100);
        assertEquals(117.73, result, 0.01);
    }

    @Test
    void testConvertInvalidCurrency() {
        CurrencyService service = new CurrencyService();
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            service.convert("ABC", "EUR", 100);
        });
        assertEquals("Invalid currency code", exception.getMessage());
    }
}
