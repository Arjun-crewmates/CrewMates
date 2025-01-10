import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class ExchangeRateDaoTest {
    private ExchangeRateDao dao = new ExchangeRateDao();

    @Test
    void testGetExchangeRates() {
        assertNotNull(dao.getExchangeRates());
    }
}
