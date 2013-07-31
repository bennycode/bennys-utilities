package de.bennyn.javascript.utilities;

import java.io.File;
import java.net.URL;

public class Properties {

  /**
   *
   * @param relativePath Example: "js/index.html"
   * @return Example:
   * "/opt/workspace/bneu/bennys-utilities/target/classes/js/index.html"
   */
  public String getCompiledPath(String relativePath) {
    URL resource = getClass().getClassLoader().getResource(relativePath);
    File file = new File(resource.getFile());

    return file.getAbsolutePath();
  }

  public String getSourcePath(String relativePath) {
    String compiledPath = getCompiledPath(relativePath);
    String sourcePath = compiledPath.replace("target/classes", "src/main/resources");
    
    return sourcePath;
  }
}
