package com.example.currencyconverter.servlet;

import com.example.currencyconverter.service.CurrencyService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/convert")
public class CurrencyConverterServlet extends HttpServlet {
    private CurrencyService currencyService;

    @Override
    public void init() throws ServletException {
        super.init();
        currencyService = new CurrencyService();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("index.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String from = request.getParameter("from");
        String to = request.getParameter("to");
        double amount;

        try {
            amount = Double.parseDouble(request.getParameter("amount"));
        } catch (NumberFormatException e) {
            request.setAttribute("error", "Invalid amount format");
            request.getRequestDispatcher("index.jsp").forward(request, response);
            return;
        }

        try {
            double result = currencyService.convert(from, to, amount);
            request.setAttribute("from", from);
            request.setAttribute("to", to);
            request.setAttribute("amount", amount);
            request.setAttribute("result", result);
            request.getRequestDispatcher("result.jsp").forward(request, response);
        } catch (IllegalArgumentException e) {
            request.setAttribute("error", e.getMessage());
            request.getRequestDispatcher("index.jsp").forward(request, response);
        }
    }
}
