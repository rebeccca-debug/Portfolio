package com.google.sps.servlets;

import com.google.api.gax.paging.Page;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Shows all of the images uploaded to Cloud Storage. */
@WebServlet("/list-images")
public class ListImagesServlet extends HttpServlet {

    //Default serial number.
    private static final long serialVersionUID = 1L;

    ////Retrieve projectId and bucketName.
    private static final String projectId = "rshillingford-sps-spring21";
    private static final String bucketName = "rshillingford-sps-spring21.appspot.com";

    /**
     * Gets files saved in cloud storage and lists them on an HTML page.
     */
    @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // List all of the uploaded files.
    Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();
    Bucket bucket = storage.get(bucketName);
    Page<Blob> uploads = bucket.list();

    // Output <img> elements as HTML.
    response.setContentType("text/html;");
    for (Blob upload : uploads.iterateAll()) {
      String imgTag = String.format("<img src=\"%s\" />", upload.getMediaLink());
      response.getWriter().println(imgTag);
      response.getWriter().println("<br>");
    }
  }
}