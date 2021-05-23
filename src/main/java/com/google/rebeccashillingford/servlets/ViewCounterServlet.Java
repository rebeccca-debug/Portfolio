package com.google.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns HTML containing the view count of each post. */
@WebServlet("/view-counter")
public class ViewCounterServlet extends HttpServlet {
    
    private int viewCount = 0;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse) throws IOException {
        viewCount++;

        response.setContentType("text/html;");
        response.getWriter().println("<h1>Page Views</h1>");
        response.getWriter().println("<p>This post has been viewed" + viewCount + " times.</p>");
    }
}