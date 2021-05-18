package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet("/lyrics")
public class LyricsServlet extends HttpServlet {

    //Default serial number
    private static final long serialVersionUID = 1L;

    /**
     *  Handles requests sent to the /lyrics URL.
     */
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        ArrayList<String> songLyrics = initializeArray();
        //Convert lyrics to JSON
        String json = convertToJsonUsingGson(songLyrics);

        // Send the JSON as the response
        response.setContentType("application/json;");
        response.getWriter().println(json);
    }
    /*
    *   Returns song lyrics.
    */
    private ArrayList<String> initializeArray(){
        ArrayList<String> songLyrics = new ArrayList<String>();
        songLyrics.add("Unsealed, on a porch a letter sat / Then you said, I wanna leave it again / Once I saw her on a beach of weathered sand / And on the sand I wanna leave her again");
        songLyrics.add("I'm gonna live my life / I can't ever run and hide / I won't compromise / Cause I'll never know / I'm gonna close my eyes / I can't watch the time go by / I won't keep it inside");
        songLyrics.add("That's the way everyday goes / Every time we've no control / If the sky is pink and white / If the ground is black and yellow / It's the same way you showed me");
        return songLyrics;
    }
    /*
    *   Converts songLyrics array to JSON data.
    */
    private String convertToJsonUsingGson(ArrayList<String> songLyrics) {
        Gson gson = new Gson();
        return gson.toJson(songLyrics);
  }
}