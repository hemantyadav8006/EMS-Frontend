export const apiRequest = async (
  url: string,
  options: { [key: string]: any }
) => {
  try {
    const token = localStorage.getItem("accessToken");

    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    let response = await fetch(url, options);
    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    if (response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        window.location.href = "/";
        return;
      }

      const refreshResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/cms-auth/refresh-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken }),
        }
      );

      if (refreshResponse.ok) {
        const result = await refreshResponse.json();
        const accessToken = result.accessToken;

        localStorage.setItem("accessToken", accessToken);

        options.headers["Authorization"] = `Bearer ${accessToken}`;
        response = await fetch(url, options);
        if (response.ok) {
          return await response.json();
        }
      } else {
        window.location.href = "/";
      }
    }

    throw new Error(responseData.message?.message || "Request failed");
  } catch (error) {
    throw error;
  }
};
