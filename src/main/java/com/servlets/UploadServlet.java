// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package com.servlets;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 * Takes an image submitted by the user and uploads it to Cloud Storage, and then displays it as
 * HTML in the response.
 */
@WebServlet("/upload")
@MultipartConfig
public class UploadServlet extends HttpServlet {

    //Default serial number
    private static final long serialVersionUID = 1L;

    //Retrieve projectId and bucketName
    private static final String projectId = "rebeccashillingford";
    private static final String bucketName = "rebeccashillingford.appspot.com";

  @Override
    /* Upload posts to cloud storage.
    */
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

            // Get the message entered by the user.
            String message = request.getParameter("message");

            // Get the file chosen by the user.
            Part filePart = request.getPart("image");
            String fileName = filePart.getSubmittedFileName();
            byte[] fileInputStream = filePart.getInputStream().readAllBytes();

            // Upload the file and get its URL.
            String uploadedFileUrl = uploadToCloudStorage(fileName, fileInputStream);

            // Output some HTML that shows the data the user entered.
            PrintWriter out = response.getWriter();
            out.println("<p>Here's the image you uploaded:</p>");
            out.println("<a href=\"" + uploadedFileUrl + "\">");
            out.println("<img src=\"" + uploadedFileUrl + "\" />");
            out.println("</a>");
            out.println("<p>Here's the text you entered:</p>");
            out.println(message);
        }

    /**
     * Uploads a file to Cloud Storage and returns the uploaded file's URL.
     * 
     * @throws IOException
     */
    private static String uploadToCloudStorage(String fileName, byte[] fileInputStream) throws IOException {
        Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();
        BlobId uploadId = BlobId.of(bucketName, fileName);
        BlobInfo uploadInfo = BlobInfo.newBuilder(uploadId).build();

        // Upload the file to Cloud Storage.
        Blob blob = storage.create(uploadInfo, fileInputStream);

        // Return the uploaded file's URL.
        return blob.getMediaLink();
    }
}